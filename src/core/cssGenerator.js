/**
 * Generates CSS rules from a site config and injects them as a <style> element.
 * Replaces per-site .css files with runtime-generated CSS.
 */
export function generateAndInjectCss(siteConfig) {
  const rules = [];

  for (const option of siteConfig.options) {
    rules.push(...generateOptionRules(option));
  }

  const style = document.createElement("style");
  style.id = "aio-privacy-css";
  style.textContent = rules.join("\n");
  document.head.appendChild(style);
}

function generateOptionRules(option) {
  const { id, effect, selectors } = option;
  const rules = [];

  if (effect === "blur") {
    rules.push(...generateBlurRules(option));
  } else if (effect === "opacity") {
    rules.push(...generateOpacityRules(option));
  } else if (effect === "grayscale-blur") {
    rules.push(...generateGrayscaleBlurRules(option));
  }

  if (option.extraCss) {
    rules.push(option.extraCss);
  }

  return rules;
}

function generateBlurRules(option) {
  const { id, selectors, defaultStrength } = option;
  const rules = [];
  const cls = `blur-${id}`;
  const nohover = `nohover-${id}`;
  const cssVar = `var(--blur-${id}, ${defaultStrength}px)`;

  // Effect rules
  const effectSelectors = selectors.map(s => `body.blur-mode.${cls} ${s}`).join(",\n");
  rules.push(`${effectSelectors} {\n  filter: blur(${cssVar}) !important;\n  transition: filter 0.3s ease;\n}`);

  // Hover rules
  if (option.hoverSelectors) {
    const hoverSels = option.hoverSelectors.map(s => `body.blur-mode.${cls}:not(.${nohover}) ${s}`).join(",\n");
    rules.push(`${hoverSels} {\n  filter: none !important;\n}`);
  } else {
    const hoverSels = selectors.map(s => `body.blur-mode.${cls}:not(.${nohover}) ${s}:hover`).join(",\n");
    rules.push(`${hoverSels} {\n  filter: none !important;\n}`);
  }

  // Force reblur rules
  if (option.forceReblur) {
    if (option.forceReblurSelectors) {
      const reblurSels = option.forceReblurSelectors.map(s => `body.${nohover}.blur-mode.${cls} ${s}`).join(",\n");
      rules.push(`${reblurSels} {\n  filter: blur(${cssVar}) !important;\n}`);
    } else {
      const reblurSels = selectors.map(s => `body.${nohover}.blur-mode.${cls} ${s}:hover`).join(",\n");
      rules.push(`${reblurSels} {\n  filter: blur(${cssVar}) !important;\n}`);
    }
  }

  return rules;
}

function generateOpacityRules(option) {
  const { id, selectors, defaultStrength } = option;
  const rules = [];
  const cls = `reduced-${id}`;
  const nohover = `nohover-${id}`;
  const cssVar = `var(--opacity-${id}, ${defaultStrength})`;
  const hoverTarget = option.hoverTarget || "body";

  // Effect rules
  const effectSelectors = selectors.map(s => `body.blur-mode.${cls} ${s}`).join(",\n");
  rules.push(`${effectSelectors} {\n  opacity: ${cssVar} !important;\n  transition: opacity 0.2s ease;\n}`);

  // Hover rules
  if (hoverTarget === "body") {
    const hoverSels = selectors.map(s => `body.blur-mode.${cls}:not(.${nohover}):hover ${s}`).join(",\n");
    rules.push(`${hoverSels} {\n  opacity: 1 !important;\n}`);
  } else {
    const hoverSels = selectors.map(s => `body.blur-mode.${cls}:not(.${nohover}) ${s}:hover`).join(",\n");
    rules.push(`${hoverSels} {\n  opacity: 1 !important;\n}`);
  }

  return rules;
}

function generateGrayscaleBlurRules(option) {
  const { id, selectors, defaultStrength } = option;
  const rules = [];
  const cls = `blur-${id}`;
  const nohover = `nohover-${id}`;
  const cssVar = `var(--blur-${id}, ${defaultStrength}px)`;
  const hoverTarget = option.hoverTarget || "element";

  // Effect rules
  const effectSelectors = selectors.map(s => `body.blur-mode.${cls} ${s}`).join(",\n");
  rules.push(`${effectSelectors} {\n  filter: grayscale(100%) blur(${cssVar}) !important;\n  transition: filter 0.3s ease;\n}`);

  // Hover rules
  if (hoverTarget === "body") {
    const hoverSels = selectors.map(s => `body.blur-mode.${cls}:not(.${nohover}):hover ${s}`).join(",\n");
    rules.push(`${hoverSels} {\n  filter: none !important;\n}`);
  } else if (option.hoverSelectors) {
    const hoverSels = option.hoverSelectors.map(s => `body.blur-mode.${cls}:not(.${nohover}) ${s}`).join(",\n");
    rules.push(`${hoverSels} {\n  filter: none !important;\n}`);
  } else {
    const hoverSels = selectors.map(s => `body.blur-mode.${cls}:not(.${nohover}) ${s}:hover`).join(",\n");
    rules.push(`${hoverSels} {\n  filter: none !important;\n}`);
  }

  // Force reblur rules
  if (option.forceReblur) {
    const reblurSels = selectors.map(s => `body.${nohover}.blur-mode.${cls} ${s}:hover`).join(",\n");
    rules.push(`${reblurSels} {\n  filter: grayscale(100%) blur(${cssVar}) !important;\n}`);
  }

  return rules;
}
