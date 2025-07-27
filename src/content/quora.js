(async () => {
  const { initSite } = await import(chrome.runtime.getURL("../core/initSite.js"));
  initSite("quora", "css/quora.css");
})();
