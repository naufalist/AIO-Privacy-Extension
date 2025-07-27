(async () => {
  const { initSite } = await import(chrome.runtime.getURL("../core/initSite.js"));
  initSite("chatgpt", "css/chatgpt.css");
})();
