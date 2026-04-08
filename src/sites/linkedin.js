export default {
  id: "linkedin",
  label: "LinkedIn",
  hostnames: ["www.linkedin.com"],
  options: [
    {
      id: "topbar-logo",
      label: "Topbar Logo",
      selectors: ['.ivm-image-view-model.global-nav__branding-logo'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "post",
      label: "Post",
      selectors: [
        '.fie-impression-container',
        '.update-v2-social-activity'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "profile-card-picture",
      label: "Profile Card - Picture",
      selectors: ['.profile-card-profile-picture'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "profile-card-name",
      label: "Profile Card - Name",
      selectors: ['.profile-card-name'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "profile-card-headline",
      label: "Profile Card - Headline",
      selectors: ['.profile-card-headline'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "profile-card-location",
      label: "Profile Card - Location",
      selectors: ['a>p.profile-card-headline.text-body-xsmall.mt1+p.text-body-xsmall.t-black--light.mt1'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 8
    },
    {
      id: "message-user-picture",
      label: "Message - User Picture",
      selectors: ['div.msg-selectable-entity'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "message-user-name",
      label: "Message - User Name",
      selectors: ['.msg-conversation-listitem__participant-names.msg-conversation-card__participant-names'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "message-preview",
      label: "Message - Preview",
      selectors: ['.msg-overlay-list-bubble__message-snippet--v2'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "message-preview-timestamp",
      label: "Message - Preview Timestamp",
      selectors: ['.msg-overlay-list-bubble-item__time-stamp'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "add-to-your-feed",
      label: "Add to your feed",
      selectors: ['.feed-follows-module-recommendation'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "opened-selected-message-avatar",
      label: "Selected Chat - Avatar",
      selectors: [
        '.presence-entity__image.EntityPhoto-circle-1',
        '.msg-s-event-listitem__profile-picture.EntityPhoto-circle-2',
        '.msg-s-event-listitem__seen-receipt-photo.EntityPhoto-circle-1'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "opened-selected-message-name",
      label: "Selected Chat - Name",
      selectors: ['h2.pr1.msg-overlay-bubble-header__title'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "opened-selected-message-profile-card",
      label: "Selected Chat - Profile Card",
      selectors: ['.msg-s-profile-card.msg-s-profile-card-one-to-one'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "opened-selected-message-in-chat-name",
      label: "Selected Chat - In Chat Name",
      selectors: ['.msg-s-message-group__profile-link.msg-s-message-group__name'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "opened-selected-message-in-chat-text",
      label: "Selected Chat - In Chat Text",
      selectors: ['.msg-s-event-listitem__body'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "opened-selected-message-in-chat-box-opacity",
      label: "Selected Chat - In Chat Box Opacity",
      selectors: ['div.msg-form__contenteditable'],
      effect: "opacity",
      defaultEnabled: true,
      defaultStrength: 0.3,
      disableHoverUnblur: true
    }
  ]
};
