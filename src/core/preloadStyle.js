export function injectInitialBlur(site, settings) {
  const style = document.createElement("style");
  style.id = "initial-blur-style";

  let css = `body { visibility: hidden !important; }`;
  let hasAnyEffect = false;

  for (const [key, enabled] of Object.entries(settings)) {
    if (!enabled) continue;
    hasAnyEffect = true;
    const isOpacity = key.includes("opacity");
    const effectClass = isOpacity ? `reduced-${key}` : `blur-${key}`;
    css += ` body.${effectClass} { }`;
  }

  if (hasAnyEffect) {
    css += ` body.blur-mode { visibility: visible !important; }`;
  }

  style.textContent = css;
  document.documentElement.appendChild(style);
}
