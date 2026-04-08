export default {
  id: "youtube",
  label: "YouTube",
  hostnames: ["www.youtube.com"],
  options: [
    {
      id: "logo",
      label: "YouTube Logo",
      selectors: ['yt-icon#logo-icon'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "titles",
      label: "Video Titles",
      selectors: [
        'a#video-title-link',
        'yt-formatted-string#video-title',
        'ytd-video-renderer #title-wrapper a#video-title',
        'div.yt-lockup-metadata-view-model__text-container',
        'a.ytLockupMetadataViewModelTitle',
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "thumbnails",
      label: "Thumbnails",
      selectors: [
        'ytd-thumbnail img.yt-core-image',
        '#thumbnail img.yt-core-image',
        'a#thumbnail img.yt-core-image',
        'img.ytCoreImageHost',
        '.yt-lockup-view-model-wiz__content-image img.yt-core-image',
        'yt-collections-stack img.yt-core-image'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 12,
      forceReblur: true,
      forceReblurSelectors: [
        'yt-collections-stack:hover img.yt-core-image'
      ]
    },
    {
      id: "channel-pics",
      label: "Channel Pictures",
      selectors: [
        'yt-img-shadow img',
        'yt-spec-avatar-shape img',
        'img.yt-spec-avatar-shape__image'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8,
      hoverSelectors: [
        '.yt-spec-avatar-shape:hover img',
        'yt-img-shadow:hover img',
        'yt-spec-avatar-shape:hover img.yt-spec-avatar-shape__image'
      ],
      forceReblur: true
    },
    {
      id: "channel-names",
      label: "Channel Names",
      selectors: [
        'ytd-channel-name yt-formatted-string#text a',
        'div.ytContentMetadataViewModelMetadataRow',
        'div.ytReelMetapanelViewModelMetapanelItem'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "watch-title",
      label: "Watch Page Title",
      selectors: ['ytd-watch-metadata yt-formatted-string[title]'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "video-description",
      label: "Video Description",
      selectors: [
        '#info-container',
        '#description-inline-expander #snippet',
        '#description-inline-expander #expanded',
        'ytd-video-renderer .metadata-snippet-container .metadata-snippet-text',
        'ytd-video-renderer .metadata-snippet-container yt-formatted-string.metadata-snippet-text',
        'ytd-video-renderer .metadata-snippet-container yt-formatted-string.metadata-snippet-text-navigation'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10,
      hoverSelectors: [
        '#info-container:hover',
        '#description-inline-expander:hover #snippet',
        '#description-inline-expander:hover #expanded',
        'ytd-video-renderer .metadata-snippet-container .metadata-snippet-text:hover',
        'ytd-video-renderer .metadata-snippet-container yt-formatted-string.metadata-snippet-text:hover',
        'ytd-video-renderer .metadata-snippet-container yt-formatted-string.metadata-snippet-text-navigation:hover'
      ]
    },
    {
      id: "playlist-titles",
      label: "Playlist Titles",
      selectors: ['span#video-title.style-scope.ytd-playlist-panel-video-renderer'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8,
      hoverSelectors: ['span#video-title:hover']
    },
    {
      id: "playlist-byline",
      label: "Playlist Channel Names",
      selectors: ['span#byline.style-scope.ytd-playlist-panel-video-renderer'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8,
      hoverSelectors: ['span#byline:hover']
    },
    {
      id: "searchbox-text-opacity",
      label: "Search Box & Suggestion Text",
      selectors: [
        'input.ytSearchboxComponentInput',
        '.ytSuggestionComponentBold'
      ],
      effect: "opacity",
      defaultEnabled: true,
      defaultStrength: 0.3,
      disableHoverUnblur: true
    },
    {
      id: "sidebar-subscriptions",
      label: "Sidebar Subscriptions",
      selectors: ['ytd-guide-entry-renderer yt-formatted-string.title'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "chip-cloud-renderer",
      label: "Chip Cloud Renderer",
      selectors: ['yt-chip-cloud-chip-renderer'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "mix-titles",
      label: "Mix Titles",
      selectors: [
        '.yt-lockup-metadata-view-model-wiz__title',
        '.yt-lockup-metadata-view-model-wiz__title .yt-core-attributed-string',
        'ytd-playlist-panel-renderer #header-description yt-formatted-string.title',
        'ytd-playlist-panel-renderer #header-description .byline-title'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "mix-channel-names",
      label: "Mix Channel Names",
      selectors: ['.yt-lockup-metadata-view-model-wiz__metadata .yt-core-attributed-string'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "shorts-titles",
      label: "Shorts Titles",
      selectors: [
        'h3.shortsLockupViewModelHostMetadataTitle .yt-core-attributed-string',
        'h2.ytShortsVideoTitleViewModelShortsVideoTitle.ytShortsVideoTitleViewModelShortsVideoTitleLarge'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "shorts-thumbnails",
      label: "Shorts Thumbnails",
      selectors: [
        'ytm-shorts-lockup-view-model-v2 img.shortsLockupViewModelHostThumbnail',
        'ytm-shorts-lockup-view-model img.shortsLockupViewModelHostThumbnail'
      ],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 8,
      forceReblur: true
    },
    {
      id: "video-stream",
      label: "Video Stream",
      selectors: ['video.video-stream'],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 16
    }
  ]
};
