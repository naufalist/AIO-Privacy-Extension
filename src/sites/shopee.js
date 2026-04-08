export default {
  id: "shopee",
  label: "Shopee",
  hostnames: ["shopee.co.id"],
  options: [
    {
      id: "topbar-logo",
      label: "Topbar Logo",
      selectors: ['a.header-with-search__logo-section'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "topbar-menu",
      label: "Topbar Menu",
      selectors: [
        'a[href="//seller.shopee.co.id"]',
        'a[href="/web/"]',
        'div.flex.L4HcCc.xXLiVe.RD3lG6',
        'div.flex.L4HcCc.FwLW4J',
        'ul.navbar__links'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "topbar-search-recommendation",
      label: "Topbar Search Recommendation",
      selectors: [
        'div.header-with-search__search-section',
        'h1.JmXfms'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "searchbox-input-opacity",
      label: "Search Box Input Opacity",
      selectors: ['input.shopee-searchbar-input__input'],
      effect: "opacity",
      defaultEnabled: true,
      defaultStrength: 0.2,
      disableHoverUnblur: true
    },
    {
      id: "searchbar-hints-history-opacity",
      label: "Search Bar Listbox Opacity",
      selectors: [
        'div.shopee-searchbar-hints__history-entry__text',
        'a.shopee-searchbar-hints__search-shop',
        'div.shopee-searchbar-hints__entry__product-name'
      ],
      effect: "opacity",
      defaultEnabled: true,
      defaultStrength: 0.2,
      disableHoverUnblur: true
    },
    {
      id: "search-result-header",
      label: "Search Result Header",
      selectors: ['h1.shopee-search-result-header'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "cart-menu",
      label: "Cart Menu",
      selectors: ['div.cart-drawer-container'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "cart-popup",
      label: "Cart Popup",
      selectors: [
        'div.USqAzC',
        'h3.Z6w4JQ',
        'div.Clb1oh',
        'span.cart-drawer__more-items-count',
        'a[href="/cart"]'
      ],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "homepage-carousel-banner",
      label: "Homepage Carousel Banner",
      selectors: ['section#HomePageCarouselBannerSection'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 12
    },
    {
      id: "homepage-banner-menu",
      label: "Homepage Banner Menu",
      selectors: ['div.full-home-banners-wrapper>div.LJXu7k'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "home-category-list",
      label: "Home Category List",
      selectors: ['div.home-category-list'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "home-flash-sale",
      label: "Home Flash Sale",
      selectors: ['div.R3bOnT'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 12
    },
    {
      id: "produk-terlaris",
      label: "Produk Terlaris",
      selectors: ['div.shopee-header-section.au6P2T.shopee-header-section--simple'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "product-card",
      label: "Product Card",
      selectors: ['div.flex.flex-col.bg-white.cursor-pointer.h-full'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 16
    },
    {
      id: "product-image",
      label: "Product Image",
      selectors: [
        'div.relative.z-0.w-full.pt-full',
        'div.TMw1ot',
        'div.airUhU',
        'div.Vi9WmM',
        'div.jA1mTx.d0bVwS'
      ],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 10
    },
    {
      id: "product-title",
      label: "Product Title",
      selectors: [
        'div.mb-1.line-clamp-2.break-words.min-w-0.min-h-\\[2\\.5rem\\].text-sm.th\\:text-\\[12px\\].my\\:text-\\[12px\\].km\\:text-\\[12px\\]',
        'div.flex.items-center.idLK2l.page-product__breadcrumb',
        'div.WBVL_7',
        'div.r2TsIa'
      ],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 10
    },
    {
      id: "product-price",
      label: "Product Price",
      selectors: [
        'div.max-w-full.flex-grow-1.flex-shrink-0.truncate.text-shopee-primary.flex.items-center.font-medium',
        'div.flex.flex-column.IFdRIb'
      ],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 10
    },
    {
      id: "total-product-sold",
      label: "Total Product Sold",
      selectors: ['div.truncate.text-shopee-black87.text-xs.min-h-4.flex-shrink-1.ml-auto'],
      effect: "blur",
      defaultEnabled: false,
      defaultStrength: 10
    },
    {
      id: "product-flash-sale-badge",
      label: "Product Flash Sale Badge",
      selectors: ['div.box-border.flex.\\!space-x-1.h-5.text-sp10.my\\:text-\\[0\\.5rem\\].km\\:text-\\[0\\.5rem\\].items-center.overflow-hidden.mb-2'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "cart-section",
      label: "Cart Section",
      selectors: ['section.AuhAvM'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "cart-footer",
      label: "Cart Footer",
      selectors: ['section.yn6AIc.dhqg2H'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "order-section",
      label: "Order Section",
      selectors: ['div.YL_VlX'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    },
    {
      id: "chat-section",
      label: "Chat Section",
      selectors: ['div#shopee-mini-chat-embedded'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 10
    }
  ]
};
