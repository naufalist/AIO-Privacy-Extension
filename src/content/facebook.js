(async () => {
  const { initSite } = await import(chrome.runtime.getURL("../core/initSite.js"));
  initSite("facebook", "css/facebook.css");
})();
