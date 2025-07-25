export async function getSettings(site) {
  return new Promise(resolve => {
    chrome.storage.local.get(null, (items) => {
      const result = {};
      for (const [k, v] of Object.entries(items)) {
        if (k.startsWith(`${site}_`) && !k.endsWith("_strength")) {
          result[k.replace(`${site}_`, "")] = v;
        }
      }
      resolve(result);
    });
  });
}

export function applyStrengths(site) {
  chrome.storage.local.get(null, (items) => {
    for (const [key, value] of Object.entries(items)) {
      if (key.startsWith(`${site}_`) && key.endsWith("_strength")) {
        const base = key.replace(`${site}_`, "").replace("_strength", "");
        const cssVar = `--${base.includes("opacity") ? "opacity" : "blur"}-${base}`;
        const cssVal = base.includes("opacity") ? value : `${value}px`;
        document.documentElement.style.setProperty(cssVar, cssVal);
      }
    }
  });
}

export async function applyAllClasses(site) {
  const settings = await getSettings(site);

  document.body.classList.remove("blur-mode");
  const toRemove = [...document.body.classList].filter(cls =>
    cls.startsWith("blur-") || cls.startsWith("reduced-") || cls.startsWith("nohover-")
  );
  document.body.classList.remove(...toRemove);

  let hasAnyEffect = false;

  for (const [key, enabled] of Object.entries(settings)) {
    if (!enabled) continue;
    hasAnyEffect = true;

    const isOpacity = key.includes("opacity");
    const effectClass = isOpacity ? `reduced-${key}` : `blur-${key}`;
    const noHoverKey = `${site}_${key}_nohover`;

    document.body.classList.add(effectClass);
    chrome.storage.local.get(noHoverKey, (res) => {
      if (res[noHoverKey]) {
        document.body.classList.add(`nohover-${key}`);
      }
    });
  }

  if (hasAnyEffect) {
    document.body.classList.add("blur-mode");
  }

  const preloadStyle = document.getElementById("initial-blur-style");
  if (preloadStyle) preloadStyle.remove();
}