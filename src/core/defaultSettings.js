export const defaultSettings = {
  youtube: {
    "logo": true,
    "titles": true,
    "thumbnails": true,
    "channel-pics": true,
    "channel-names": true,
    "watch-title": true,
    "video-description": true,
    "playlist-titles": true,
    "playlist-byline": true,
    "searchbox-text-opacity": true,
    "sidebar-subscriptions": true,
    "mix-titles": true,
    "mix-channel-names": true,
    "shorts-titles": true,
    "shorts-thumbnails": true,

    "logo_strength": 8,
    "titles_strength": 8,
    "thumbnails_strength": 12,
    "channel-pics_strength": 8,
    "channel-names_strength": 8,
    "watch-title_strength": 8,
    "video-description_strength": 8,
    "playlist-titles_strength": 8,
    "playlist-byline_strength": 8,
    "searchbox-text-opacity_strength": 0.3,
    "sidebar-subscriptions_strength": 8,
    "mix-titles_strength": 8,
    "mix-channel-names_strength": 8,
    "shorts-titles_strength": 8,
    "shorts-thumbnails_strength": 8
  },
  twitter: {
    "tweet": true,
    "trending": true,
    "sidebar-icons": true,

    "tweet_strength": 16,
    "trending_strength": 8,
    "sidebar-icons_strength": 8
  },
  chatgpt: {
    "sidebar-titles": true,
    "chat-section-block": true,

    "sidebar-titles_strength": 8,
    "chat-section-block_strength": 8
  }
};

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
