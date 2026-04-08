export default {
  id: "facebook",
  label: "Facebook",
  hostnames: ["facebook.com"],
  options: [
    {
      id: "avatar",
      label: "Avatar (FB Messenger)",
      selectors: ['img.x15mokao.x1ga7v0g.x16uus16.xbiv7yw'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "display-name-chat",
      label: "Display Name Chat (FB Messenger)",
      selectors: ['h2.xeuugli span.x1lliihq'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "sidebar-display-names",
      label: "Sidebar Display Name (FB Messenger)",
      selectors: ['a.x1a2a7pz span.x1lliihq.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft:not(.x1j85h84)'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "sidebar-chat-preview",
      label: "Sidebar Chat Preview (FB Messenger)",
      selectors: ['div[role="row"] span.x1lliihq.x6ikm8r.x10wlt62.x1n2onr6.x1j85h84'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "chat-bubble",
      label: "Chat Bubble (FB Messenger)",
      selectors: [
        'div[dir="auto"].x1yc453h',
        'div.xeuugli.x14vy60q span.x1aimgj9',
        'div.x1mzt3pk.x1l90r2v.x1iorvi4'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "chat-media",
      label: "Chat Media (FB Messenger)",
      selectors: ['img.xz74otr.xmz0i5r.x193iq5w'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "chat-avatar",
      label: "Chat Avatar (FB Messenger)",
      selectors: ['img.x1rg5ohu.x5yr21d.xl1xv1r.xh8yej3'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "chat-input-opacity",
      label: "Chat Input Opacity (FB Messenger)",
      selectors: ['div[contenteditable="true"][role="textbox"]'],
      effect: "opacity",
      defaultEnabled: true,
      defaultStrength: 0.3,
      disableHoverUnblur: true,
      hoverTarget: "element"
    }
  ]
};
