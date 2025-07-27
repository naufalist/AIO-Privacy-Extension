(async () => {
  const { initSite } = await import(chrome.runtime.getURL("../core/initSite.js"));
  initSite("twitter", "css/twitter.css");
})();
