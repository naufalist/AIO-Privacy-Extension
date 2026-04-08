import { siteConfigs } from "../sites/index.js";

/**
 * Generate default settings from site configs (single source of truth).
 */
function buildDefaultSettings() {
  const defaults = {};
  for (const config of Object.values(siteConfigs)) {
    const siteDefaults = {};
    for (const option of config.options) {
      siteDefaults[option.id] = option.defaultEnabled;
      siteDefaults[`${option.id}_strength`] = option.defaultStrength;
      if (option.disableHoverUnblur && option.defaultEnabled) {
        siteDefaults[`${option.id}_nohover`] = true;
      }
    }
    defaults[config.id] = siteDefaults;
  }
  return defaults;
}

export const defaultSettings = buildDefaultSettings();

/**
 * Set default settings if not already present in chrome.storage.local
 */
export async function setDefaultSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get(null, (current) => {
      const updates = {};
      for (const [site, options] of Object.entries(defaultSettings)) {
        for (const [key, value] of Object.entries(options)) {
          const fullKey = `${site}_${key}`;
          if (!(fullKey in current)) {
            updates[fullKey] = value;
          }
        }
      }
      if (Object.keys(updates).length > 0) {
        chrome.storage.local.set(updates, resolve);
      } else {
        resolve();
      }
    });
  });
}
