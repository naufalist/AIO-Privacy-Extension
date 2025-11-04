export const defaultSettings = {
  whatsapp: {
    "logo": true,
    "profile-picture": true,
    "contact-name": true,
    "preview-chat": true,
    "chat-bubble": true,
    "chat-input-opacity": true,
    "chat-input-opacity_nohover": true,
    "chat-input": true,

    "logo_strength": 8,
    "profile-picture_strength": 8,
    "contact-name_strength": 5,
    "preview-chat_strength": 8,
    "chat-bubble_strength": 8,
    "chat-input-opacity_strength": 0.2,
    "chat-input_strength": 8,
  },
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
    "searchbox-text-opacity_nohover": true,
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
    "prompt-text-opacity": true,
    "prompt-text-opacity_nohover": true,

    "sidebar-titles_strength": 8,
    "chat-section-block_strength": 8,
    "prompt-text-opacity_strength": 0.3,
  },
  facebook: {
    "avatar": true,
    "display-name-chat": true,
    "sidebar-display-names": true,
    "sidebar-chat-preview": true,
    "chat-bubble": true,
    "chat-media": true,
    "chat-avatar": true,
    "chat-input-opacity": true,

    "avatar_strength": 8,
    "display-name-chat_strength": 8,
    "sidebar-display-names_strength": 8,
    "sidebar-chat-preview_strength": 8,
    "chat-bubble_strength": 8,
    "chat-media_strength": 8,
    "chat-avatar_strength": 8,
    "chat-input-opacity_strength": 0.3,
    "chat-input-opacity_nohover": true
  },
  quora: {
    "article-full-block": true,
    "article-avatar": false,
    "article-display-name": false,
    "article-user-byline": false,
    "article-content-title": false,
    "article-content": false,
    "question-card": true,

    "article-full-block_strength": 4,
    "article-avatar_strength": 4,
    "article-display-name_strength": 4,
    "article-user-byline_strength": 4,
    "article-content-title_strength": 4,
    "article-content_strength": 16,
    "question-card_strength": 4
  },
  canva: {
    "canva-page-header": true,
    "canva-page-content": true,

    "canva-page-header_strength": 4,
    "canva-page-content_strength": 16
  },
  linkedin: {
    "topbar-logo": true,
    "post": true,
    "profile-card-picture": true,
    "profile-card-name": true,
    "profile-card-headline": true,
    "profile-card-location": true,
    "message-user-picture": true,
    "message-user-name": true,
    "message-preview": true,
    "message-preview-timestamp": true,
    "add-to-your-feed": true,
    "opened-selected-message-avatar": true,
    "opened-selected-message-name": true,
    "opened-selected-message-profile-card": true,
    "opened-selected-message-in-chat-name": true,
    "opened-selected-message-in-chat-text": true,
    "opened-selected-message-in-chat-box-opacity": true,
    "opened-selected-message-in-chat-box-opacity_nohover": true,

    "topbar-logo_strength": 10,
    "post_strength": 8,
    "profile-card-picture_strength": 8,
    "profile-card-name_strength": 8,
    "profile-card-headline_strength": 8,
    "profile-card-location_strength": 8,
    "message-user-picture_strength": 4,
    "message-user-name_strength": 4,
    "message-preview_strength": 4,
    "message-preview-timestamp_strength": 4,
    "add-to-your-feed_strength": 4,
    "opened-selected-message-avatar_strength": 4,
    "opened-selected-message-name_strength": 4,
    "opened-selected-message-profile-card_strength": 4,
    "opened-selected-message-in-chat-name_strength": 4,
    "opened-selected-message-in-chat-text_strength": 4,
    "opened-selected-message-in-chat-box-opacity_strength": 0.3
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
