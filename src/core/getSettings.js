export function getSettings(site) {
  return new Promise((resolve) => {
    try {
      chrome.storage?.local?.get(null, (items) => {
        if (chrome.runtime?.lastError) {
          console.warn("getSettings error:", chrome.runtime.lastError.message);
          return resolve({});
        }

        const result = {};
        for (const [k, v] of Object.entries(items || {})) {
          if (k.startsWith(`${site}_`) && !k.endsWith("_strength")) {
            result[k.replace(`${site}_`, "")] = v;
          }
        }

        resolve(result);
      });
    } catch (err) {
      console.warn("getSettings failed:", err);
      resolve({});
    }
  });
}