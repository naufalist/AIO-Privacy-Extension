// background.js (as ES Module)

import { setDefaultSettings } from './core/defaultSettings.js';

chrome.runtime.onInstalled.addListener(async () => {
  await setDefaultSettings();
});
