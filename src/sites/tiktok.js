export default {
  id: "tiktok",
  label: "TikTok",
  hostnames: ["www.tiktok.com"],
  options: [
    {
      id: "logo",
      label: "TikTok Logo",
      selectors: ['a[data-e2e="tiktok-logo"]'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "search-tabs-text",
      label: "Search Tabs Text",
      selectors: ['div#search-tabs'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "search-box-opacity",
      label: "Search Box",
      selectors: [
        'button[data-e2e="nav-search"]',
        'form[data-e2e="search-box"]',
        'ul#header-sug-results'
      ],
      effect: "opacity",
      defaultEnabled: true,
      defaultStrength: 0.2,
      disableHoverUnblur: true
    },
    {
      id: "search-result-users",
      label: "Search Result Users",
      selectors: ['div.css-1hnbtiz-7937d88b--DivBlockContainer.e1fgy6l22'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "search-result-grid-item-container",
      label: "Search Result Grid Item Container",
      selectors: ['div[id^="grid-item-container-"]'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "main-content",
      label: "Main Content",
      selectors: ['div.css-sser0v-7937d88b--DivContentFlexLayout.e1l1r7cp1'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "other-text",
      label: "Other Text",
      selectors: [
        'ul[data-e2e="search-transfer"]', // Search transfer
        'div.css-bf8n6f-7937d88b--DivMainNavContainer.e1vp56d85', // For you, live, message, profile, etc.
        'div.css-1dz548d-7937d88b--DivUserContainer.e3ll3zf0', // Following accounts
        'div.css-ltid6q-7937d88b--DivRelatedSearchListContainer.e1en7hnv1' // Others searched for
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    }
  ]
};
