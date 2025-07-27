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
