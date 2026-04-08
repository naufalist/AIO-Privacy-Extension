export default {
  id: "chatgpt",
  label: "ChatGPT",
  hostnames: ["chatgpt.com", "chat.openai.com"],
  options: [
    {
      id: "sidebar-titles",
      label: "Sidebar Titles",
      selectors: ['nav a.group.__menu-item span[dir="auto"]'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8,
      hoverSelectors: ['nav a.group.__menu-item:hover span[dir="auto"]']
    },
    {
      id: "chat-section-block",
      label: "Chat Section",
      selectors: [
        'article[data-testid^="conversation-turn-"] .text-message',
        'div[data-message-author-role][data-message-id]'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8,
      hoverSelectors: [
        'article[data-testid^="conversation-turn-"]:hover .text-message',
        'div[data-message-author-role][data-message-id]:hover'
      ]
    },
    {
      id: "prompt-text-opacity",
      label: "Prompt Text Opacity",
      selectors: ['div#prompt-textarea'],
      effect: "opacity",
      defaultEnabled: true,
      defaultStrength: 0.3,
      disableHoverUnblur: true,
      hoverTarget: "element"
    }
  ]
};
