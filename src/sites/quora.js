export default {
  id: "quora",
  label: "Quora",
  hostnames: ["quora.com"],
  options: [
    {
      id: "article-full-block",
      label: "Article Full Block",
      selectors: [
        '.q-box.qu-borderAll',
        '.q-box.qu-borderTop',
        '.q-box.qu-borderBottom',
        '.q-box.qu-borderLeft',
        '.q-box.qu-borderRight',
        '.q-box.qu-borderRadius--medium',
        '.q-box.qu-boxShadow--medium'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4,
      forceReblur: true
    },
    {
      id: "article-avatar",
      label: "Article Avatar",
      selectors: ['img.q-image.qu-size--36'],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 4
    },
    {
      id: "article-display-name",
      label: "Article Display Name",
      selectors: [
        '.q-text.qu-dynamicFontSize--small.qu-bold.qu-color--gray_dark a[href*="/profile/"]',
        '.q-text.puppeteer_test_tribe_name',
        '.q-inlineFlex.qu-alignItems--center.qu-wordBreak--break-word span span'
      ],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 4
    },
    {
      id: "article-user-byline",
      label: "Article User Byline",
      selectors: [
        '.q-inlineFlex.qu-overflow--hidden img.q-image.qu-size--18',
        '.q-text.qu-color--gray .q-inlineFlex.qu-alignItems--center span span',
        '.q-text.qu-color--gray.qu-passColorToLinks'
      ],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 4
    },
    {
      id: "article-content-title",
      label: "Article Content Title",
      selectors: [
        'div.puppeteer_test_question_title',
        '.q-text.qu-dynamicFontSize--regular_title.qu-fontWeight--bold a.puppeteer_test_link'
      ],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 4
    },
    {
      id: "article-content",
      label: "Article Content",
      selectors: [
        '.q-box.qu-userSelect--text :is(p.q-text.qu-display--block.qu-wordBreak--break-word.qu-textAlign--start, ol.q-box, li.q-relative, .q-box.unzoomed img):not(.qu-truncateLines--3):not(.puppeteer_test_question_title)',
        'div.q-text.qu-truncateLines--3',
        '.q-inlineBlock.qu-overflow--hidden>.q-box[style*="background-image"]',
        'div.q-box>div.q-box>img.q-image'
      ],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 16,
      extraCss: `body.blur-mode.blur-article-content .q-flex.qu-justifyContent--space-between { pointer-events: auto !important; }`
    },
    {
      id: "question-card",
      label: "Question Card",
      selectors: ['.q-box.puppeteer_test_question_component_base'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    }
  ]
};
