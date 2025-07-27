export function injectCss(filePath) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = chrome.runtime.getURL(filePath);
  document.head.appendChild(link);
}
