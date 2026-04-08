export default {
  id: "twitter",
  label: "Twitter",
  hostnames: ["x.com", "twitter.com"],
  options: [
    {
      id: "tweet",
      label: "Tweet",
      selectors: ['article'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 16
    },
    {
      id: "trending",
      label: "Trending",
      selectors: ['[data-testid="trend"]'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "sidebar-icons",
      label: "Sidebar Icons",
      selectors: ['nav[role="navigation"] svg'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8,
      hoverSelectors: [
        'nav[role="navigation"] a:hover svg',
        'nav[role="navigation"] button:hover svg'
      ]
    }
  ]
};
