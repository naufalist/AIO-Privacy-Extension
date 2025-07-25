const siteOptions = {
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
  ],
  twitter: [
    { id: "tweet", label: "Tweet" },
    { id: "trending", label: "Trending" },
    { id: "sidebar-icons", label: "Sidebar Icons" },
  ],
  chatgpt: [
    { id: "sidebar-titles", label: "Sidebar Titles" },
    { id: "chat-section-block", label: "Chat Section" }
  ],
};

function detectActiveSite(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || !tabs[0] || !tabs[0].url) return callback(null);

    const url = new URL(tabs[0].url);
    const hostname = url.hostname;

    if (hostname.includes("youtube.com")) return callback("youtube");
    if (hostname.includes("x.com") || hostname.includes("twitter.com")) return callback("twitter");
    if (hostname.includes("chat.openai.com") || hostname.includes("chatgpt.com")) return callback("chatgpt");

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

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: "update-setting",
          site,
          optionId: option.id,
          value: isChecked,
          disableHoverUnblur: option.disableHoverUnblur || false
        });
      });

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
      range.value = result[`${optionKey}_strength`] ?? (isOpacity ? 0.3 : 10);
    });

    range.addEventListener("input", () => {
      const value = range.value;
      chrome.storage.local.set({ [`${optionKey}_strength`]: value }, () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: isOpacity ? "update-opacity-strength" : "update-blur-strength",
            site,
            optionId: option.id,
            value
          });
        });
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

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "update-setting",
            site,
            optionId: id,
            value: targetChecked,
            disableHoverUnblur: option?.disableHoverUnblur || false
          });
        });

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