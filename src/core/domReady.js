export async function waitForBody() {
  if (document.body && document.readyState === "complete") return;

  await new Promise(resolve => {
    const onReady = () => {
      if (document.body) resolve();
    };

    // Wait for DOMContentLoaded
    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", onReady, { once: true });
    } else {
      onReady();
    }

    // Use observer as a fallback in case <body> appears late
    const observer = new MutationObserver(() => {
      if (document.body) {
        observer.disconnect();
        resolve();
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  });
}
