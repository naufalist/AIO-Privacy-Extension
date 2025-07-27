export function waitForBody() {
  return new Promise(resolve => {
    if (document.body) return resolve();
    const observer = new MutationObserver(() => {
      if (document.body) {
        observer.disconnect();
        resolve();
      }
    });
    observer.observe(document.documentElement, { childList: true });
  });
}
