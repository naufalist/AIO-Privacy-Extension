(async () => {
  const { initSite } = await import(chrome.runtime.getURL("../core/initSite.js"));
  initSite("linkedin", "css/linkedin.css");
})();
