export async function initSite(site, cssPath) {
  const { getSettings } = await import(chrome.runtime.getURL("../core/getSettings.js"));
  const { injectCss } = await import(chrome.runtime.getURL("../core/injectCss.js"));
  const { injectInitialBlur } = await import(chrome.runtime.getURL("../core/preloadStyle.js"));
  const { waitForBody } = await import(chrome.runtime.getURL("../core/domReady.js"));
  const { applyAllClasses } = await import(chrome.runtime.getURL("../core/applyClasses.js"));
  const { applyStrengths } = await import(chrome.runtime.getURL("../core/applyStrengths.js"));

  await waitForBody();
  const settings = await getSettings(site);

  injectInitialBlur(site, settings);
  injectCss(cssPath);
  await applyAllClasses(site, settings);
  applyStrengths(site);

  const observer = new MutationObserver(() => {
    applyAllClasses(site, settings);
  });
  observer.observe(document.body, { childList: true, subtree: true });

  chrome.runtime.onMessage.addListener(async (message) => {
    if (message.site !== site) return;

    const className = message.optionId.includes("opacity")
      ? `reduced-${message.optionId}`
      : `blur-${message.optionId}`;
    const noHoverClass = `nohover-${message.optionId}`;
    const noHoverKey = `${site}_${message.optionId}_nohover`;

    if (message.value) {
      document.body.classList.add("blur-mode", className);
      if (message.disableHoverUnblur) {
        document.body.classList.add(noHoverClass);
        chrome.storage.local.set({ [noHoverKey]: true });
      }
    } else {
      document.body.classList.remove(className, noHoverClass);
      const stillActive = [...document.body.classList].some(cls =>
        cls.startsWith("blur-") || cls.startsWith("reduced-")
      );
      if (!stillActive) document.body.classList.remove("blur-mode");

      if (message.disableHoverUnblur) {
        chrome.storage.local.remove(noHoverKey);
      }
    }

    const varKey = `--${message.optionId.includes("opacity") ? "opacity" : "blur"}-${message.optionId}`;
    const varVal = message.optionId.includes("opacity") ? message.value : `${message.value}px`;

    if (message.type === "update-blur-strength" || message.type === "update-opacity-strength") {
      document.documentElement.style.setProperty(varKey, varVal);
    }

    try {
      const updatedSettings = await getSettings(site);
      await applyAllClasses(site, updatedSettings);
    } catch (err) {
      console.warn("onMessage getSettings failed", err);
    }
  });

}
