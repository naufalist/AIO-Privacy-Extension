import { getSettings } from "./getSettings.js";

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
