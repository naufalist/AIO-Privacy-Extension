const siteOptions = {
  whatsapp: [
    { id: "logo", label: "Logo" },
    { id: "profile-picture", label: "Profile Picture" },
    { id: "contact-name", label: "Contact Name" },
    { id: "preview-chat", label: "Preview Chat" },
    { id: "chat-bubble", label: "Chat Bubble" },
    { id: "chat-input-opacity", label: "Chat Input Text", isOpacity: true, disableHoverUnblur: true },
    { id: "chat-input", label: "Chat Input" },
  ],
  youtube: [
    { id: "logo", label: "YouTube Logo" },
    { id: "titles", label: "Video Titles" },
    { id: "thumbnails", label: "Thumbnails" },
    { id: "channel-pics", label: "Channel Pictures" },
    { id: "channel-names", label: "Channel Names" },
    { id: "watch-title", label: "Watch Page Title" },
    { id: "video-description", label: "Video Description" },
    { id: "playlist-titles", label: "Playlist Titles" },
    { id: "playlist-byline", label: "Playlist Channel Names" },
    { id: "searchbox-text-opacity", label: "Search Box & Suggestion Text", isOpacity: true, disableHoverUnblur: true },
    { id: "sidebar-subscriptions", label: "Sidebar Subscriptions" },
    { id: "mix-titles", label: "Mix Titles" },
    { id: "mix-channel-names", label: "Mix Channel Names" },
    { id: "shorts-titles", label: "Shorts Titles" },
    { id: "shorts-thumbnails", label: "Shorts Thumbnails" },
    { id: "video-stream", label: "Video Stream" },
  ],
  twitter: [
    { id: "tweet", label: "Tweet" },
    { id: "trending", label: "Trending" },
    { id: "sidebar-icons", label: "Sidebar Icons" },
  ],
  chatgpt: [
    { id: "sidebar-titles", label: "Sidebar Titles" },
    { id: "chat-section-block", label: "Chat Section" },
    { id: "prompt-text-opacity", label: "Prompt Text Opacity", isOpacity: true, disableHoverUnblur: true }
  ],
  facebook: [
    { id: "avatar", label: "Avatar (FB Messenger)" },
    { id: "display-name-chat", label: "Display Name Chat (FB Messenger)" },
    { id: "sidebar-display-names", label: "Sidebar Display Name (FB Messenger)" },
    { id: "sidebar-chat-preview", label: "Sidebar Chat Preview (FB Messenger)" },
    { id: "chat-bubble", label: "Chat Bubble (FB Messenger)" },
    { id: "chat-media", label: "Chat Media (FB Messenger)" },
    { id: "chat-avatar", label: "Chat Avatar (FB Messenger)" },
    { id: "chat-input-opacity", label: "Chat Input Opacity (FB Messenger)", isOpacity: true, disableHoverUnblur: true }
  ],
  quora: [
    { id: "article-full-block", label: "Article Full Block" },
    { id: "article-avatar", label: "Article Avatar" },
    { id: "article-display-name", label: "Article Display Name" },
    { id: "article-user-byline", label: "Article User Byline" },
    { id: "article-content-title", label: "Article Content Title" },
    { id: "article-content", label: "Article Content" },
    { id: "question-card", label: "Question Card" }
  ],
  canva: [
    { id: "canva-page-header", label: "Canva Page Header" },
    { id: "canva-page-content", label: "Canva Page Content" },
  ],
  linkedin: [
    { id: "topbar-logo", label: "Topbar Logo" },
    { id: "post", label: "Post" },
    { id: "profile-card-picture", label: "Profile Card - Picture" },
    { id: "profile-card-name", label: "Profile Card - Name" },
    { id: "profile-card-headline", label: "Profile Card - Headline" },
    { id: "profile-card-location", label: "Profile Card - Location" },
    { id: "message-user-picture", label: "Message - User Picture" },
    { id: "message-user-name", label: "Message - User Name" },
    { id: "message-preview", label: "Message - Preview" },
    { id: "message-preview-timestamp", label: "Message - Preview Timestamp" },
    { id: "add-to-your-feed", label: "Add to your feed" },
    { id: "opened-selected-message-avatar", label: "Selected Chat - Avatar" },
    { id: "opened-selected-message-name", label: "Selected Chat - Name" },
    { id: "opened-selected-message-profile-card", label: "Selected Chat - Profile Card" },
    { id: "opened-selected-message-in-chat-name", label: "Selected Chat - In Chat Name" },
    { id: "opened-selected-message-in-chat-text", label: "Selected Chat - In Chat Text" },
    { id: "opened-selected-message-in-chat-box-opacity", label: "Selected Chat - In Chat Box Opacity", isOpacity: true, disableHoverUnblur: true }
  ]
};

function safeSendMessage(message, site, optionId = null) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs?.[0];
    if (!tab?.id || !tab?.url || !tab.url.includes(site)) return;

    chrome.tabs.sendMessage(tab.id, { ping: true }, (response) => {
      if (chrome.runtime.lastError) {
        console.log(`[safeSendMessage] No content script:`, chrome.runtime.lastError.message);
        return;
      }

      try {
        chrome.tabs.sendMessage(tab.id, message);
      } catch (e) {
        console.log(`[safeSendMessage] Failed to send message for option: ${optionId}`, e);
      }
    });
  });
}

function detectActiveSite(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || !tabs[0] || !tabs[0].url) return callback(null);

    const url = new URL(tabs[0].url);
    const hostname = url.hostname;

    if (hostname.includes("web.whatsapp.com")) return callback("whatsapp");
    if (hostname.includes("youtube.com")) return callback("youtube");
    if (hostname.includes("x.com") || hostname.includes("twitter.com")) return callback("twitter");
    if (hostname.includes("chat.openai.com") || hostname.includes("chatgpt.com")) return callback("chatgpt");
    if (hostname.includes("facebook.com")) return callback("facebook");
    if (hostname.includes("quora.com")) return callback("quora");
    if (hostname.includes("canva.com")) return callback("canva");
    if (hostname.includes("linkedin.com")) return callback("linkedin");

    return callback(null);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("siteSelector");

  detectActiveSite((activeSite) => {
    if (activeSite && siteOptions[activeSite]) {
      selector.value = activeSite;
      renderSettings(activeSite);
    } else {
      renderSettings(selector.value);
    }
  });

  selector.addEventListener("change", () => renderSettings(selector.value));

  renderSettings(selector.value);

  const themeButton = document.getElementById("toggleTheme");
  const dark = localStorage.getItem("popup-dark-mode") !== "false";

  if (dark) {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "🌞";
  } else {
    document.body.classList.remove("dark-mode");
    themeButton.textContent = "🌚";
  }

  themeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("popup-dark-mode", isDark.toString());
    themeButton.textContent = isDark ? "🌞" : "🌚";
  });
});

function setStorageAsync(obj) {
  return new Promise(resolve => {
    chrome.storage.local.set(obj, resolve);
  });
}

function renderSettings(site) {
  const container = document.getElementById("settingsContainer");
  container.innerHTML = "";

  const optionMap = {};

  // Master Toggle
  const masterRow = document.createElement("div");
  masterRow.className = "option-row";

  const masterLabel = document.createElement("label");
  masterLabel.className = "label-text";
  masterLabel.innerText = "Toggle All";

  const masterSwitch = document.createElement("label");
  masterSwitch.className = "switch";

  const masterInput = document.createElement("input");
  masterInput.type = "checkbox";
  masterInput.id = "toggleAll";

  const masterSlider = document.createElement("span");
  masterSlider.className = "slider";

  masterSwitch.appendChild(masterInput);
  masterSwitch.appendChild(masterSlider);
  masterRow.appendChild(masterLabel);
  masterRow.appendChild(masterSwitch);
  container.appendChild(masterRow);

  // Option Toggles
  siteOptions[site].forEach(option => {
    const isOpacity = option.isOpacity || false;
    const optionKey = `${site}_${option.id}`;
    const noHoverKey = `${optionKey}_nohover`;

    const row = document.createElement("div");
    row.className = "option-row";

    const label = document.createElement("label");
    label.className = "label-text";
    label.innerText = option.label;

    const toggleSwitch = document.createElement("label");
    toggleSwitch.className = "switch";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = option.id;

    const slider = document.createElement("span");
    slider.className = "slider";

    toggleSwitch.appendChild(input);
    toggleSwitch.appendChild(slider);
    row.appendChild(label);
    row.appendChild(toggleSwitch);
    container.appendChild(row);

    optionMap[option.id] = input;

    chrome.storage.local.get([optionKey], (result) => {
      input.checked = result[optionKey] || false;
      updateMasterState();
    });

    input.addEventListener("change", () => {
      const isChecked = input.checked;
      chrome.storage.local.set({ [optionKey]: isChecked });

      if (option.disableHoverUnblur) {
        chrome.storage.local.set({ [noHoverKey]: isChecked });
      }

      safeSendMessage({
        type: "update-setting",
        site,
        optionId: option.id,
        value: isChecked,
        disableHoverUnblur: option?.disableHoverUnblur || false
      }, site, option.id);

      updateMasterState();
    });

    // Slider row
    const sliderRow = document.createElement("div");
    sliderRow.className = "slider-row";

    const sliderLabel = document.createElement("label");
    sliderLabel.innerText = isOpacity ? "Opacity" : "Blur (px)";
    sliderLabel.className = "slider-label";

    const range = document.createElement("input");
    range.type = "range";
    range.min = isOpacity ? 0.1 : 0;
    range.max = isOpacity ? 1 : 20;
    range.step = isOpacity ? 0.05 : 1;
    range.id = `${option.id}_strength`;

    chrome.storage.local.get(`${optionKey}_strength`, (result) => {
      const savedValue = result[`${optionKey}_strength`] ?? (isOpacity ? 0.3 : 10);
      range.value = savedValue;

      chrome.storage.local.get([optionKey], (res) => {
        if (res[optionKey]) {
          safeSendMessage({
            type: isOpacity ? "update-opacity-strength" : "update-blur-strength",
            site,
            optionId: option.id,
            value: savedValue
          }, site, option.id);
        }
      });
    });

    range.addEventListener("input", () => {
      const value = range.value;
      chrome.storage.local.set({ [`${optionKey}_strength`]: value }, () => {
        safeSendMessage({
          type: isOpacity ? "update-opacity-strength" : "update-blur-strength",
          site,
          optionId: option.id,
          value
        }, site, option.id);
      });
    });

    sliderRow.appendChild(sliderLabel);
    sliderRow.appendChild(range);
    container.appendChild(sliderRow);
  });

  async function toggleAllOptions(targetChecked) {
    for (const id of Object.keys(optionMap)) {
      const checkbox = optionMap[id];
      if (checkbox.checked !== targetChecked) {
        checkbox.checked = targetChecked;

        const optionKey = `${site}_${id}`;
        const option = siteOptions[site].find(o => o.id === id);

        await setStorageAsync({ [optionKey]: targetChecked });

        if (option?.disableHoverUnblur) {
          await setStorageAsync({ [`${optionKey}_nohover`]: targetChecked });
        }

        safeSendMessage({
          type: "update-setting",
          site,
          optionId: id,
          value: targetChecked,
          disableHoverUnblur: option?.disableHoverUnblur || false
        }, site, id);

        await new Promise(r => setTimeout(r, 15));
      }
    }

    updateMasterState();
  }

  masterInput.addEventListener("change", () => {
    toggleAllOptions(masterInput.checked);
  });

  function updateMasterState() {
    const values = Object.values(optionMap).map(input => input.checked);
    const allOn = values.every(v => v === true);
    const allOff = values.every(v => v === false);

    masterInput.checked = allOn;
    masterInput.indeterminate = !allOn && !allOff;
  }
}

window.addEventListener("beforeunload", () => {
  chrome.storage.local.set({}, () => { });
});
