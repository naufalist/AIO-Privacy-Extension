export default {
  id: "whatsapp",
  label: "WhatsApp",
  hostnames: ["web.whatsapp.com"],
  options: [
    {
      id: "logo",
      label: "Logo",
      selectors: ['span[aria-label="WhatsApp"][data-icon="wa-wordmark-refreshed"]'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "profile-picture",
      label: "Profile Picture",
      selectors: [
        'img._ao3e.x1n2onr6',
        'span[data-icon="default-contact-refreshed"]',
        'span[data-icon="default-group-refreshed"]',
        'span[data-icon="wa-chat-psa"]'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "contact-name",
      label: "Contact Name",
      selectors: ['span._ao3e[dir="auto"]'],
      effect: "grayscale-blur",
      defaultEnabled: true,
      defaultStrength: 5
    },
    {
      id: "preview-chat",
      label: "Preview Chat",
      selectors: ['div._ak8j span.x78zum5.x1cy8zhl'],
      effect: "grayscale-blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "chat-bubble",
      label: "Chat Bubble",
      selectors: [
        'div.copyable-text[data-pre-plain-text]',
        'div[aria-label="Open picture"] img',
        'div._amk4 img._ajxb._ajxj._ajxd',
        'div._ak49',
        'button[aria-label="Play voice message"]',
        'div.x10l6tqk.x1vjfegm.x78zum5.x6s0dn4.xl56j7k',
        'span._ahx_[role="button"]',
        'div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x1onr9mi.xsdox4t.xh8yej3',
        'div.x78zum5.x1cy8zhl.xisnujt.x1nxh6w3.xcgms0a.x16cd2qt>span.selectable-text.copyable-text._ao3e'
      ],
      effect: "grayscale-blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "chat-input-opacity",
      label: "Chat Input Text",
      selectors: ['span.copyable-text.xkrh14z[data-lexical-text="true"]'],
      effect: "opacity",
      defaultEnabled: true,
      defaultStrength: 0.2,
      disableHoverUnblur: true
    },
    {
      id: "chat-input",
      label: "Chat Input",
      selectors: [
        'span.copyable-text.xkrh14z[data-lexical-text="true"]',
        'div.x78zum5.x1q0g3np.x1311tq3.xvh3i5d.x6nvzda.x4i4b9w.xhl9efl.xj65ea0.x14aock7.x889kno.x2vl965.x1a8lsjc.xe2zdcy',
        'div.x1n2onr6.xh8yej3.xjdcl3y.lexical-rich-text-input'
      ],
      effect: "grayscale-blur",
      defaultEnabled: true,
      defaultStrength: 8,
      hoverTarget: "body"
    }
  ]
};
