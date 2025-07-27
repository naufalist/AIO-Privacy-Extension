export function getSettings(site, retries = 3) {
  return new Promise((resolve) => {
    function tryFetch(attempt = 1) {
      if (!chrome?.storage?.local || !chrome?.runtime?.id) {
        console.log("chrome.storage.local unavailable or extension context invalidated");
        return resolve({});
      }

      try {
        chrome.storage.local.get(null, (items) => {
          if (chrome.runtime?.lastError) {
            if (attempt < retries) {
              console.warn(`getSettings retrying ${attempt}:`, chrome.runtime.lastError.message);
              return setTimeout(() => tryFetch(attempt + 1), 100);
            }
            return resolve({});
          }

          try {
            const result = {};
            for (const [k, v] of Object.entries(items || {})) {
              if (k.startsWith(`${site}_`) && !k.endsWith("_strength")) {
                result[k.replace(`${site}_`, "")] = v;
              }
            }

            resolve(result);
          } catch (err) {
            console.warn("getSettings inner fail:", err);
            resolve({});
          }
        });
      } catch (e) {
        if (attempt < retries) {
          console.warn(`getSettings outer retrying ${attempt}:`, e);
          return setTimeout(() => tryFetch(attempt + 1), 100);
        }
        resolve({});
      }
    }

    tryFetch();
  });
}
