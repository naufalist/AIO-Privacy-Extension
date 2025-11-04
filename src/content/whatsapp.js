(async () => {
  const { initSite } = await import(chrome.runtime.getURL("../core/initSite.js"));
  initSite("whatsapp", "css/whatsapp.css");
})();
