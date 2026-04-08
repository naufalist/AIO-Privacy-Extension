export default {
  id: "canva",
  label: "Canva",
  hostnames: ["www.canva.com"],
  options: [
    {
      id: "canva-page-header",
      label: "Canva Page Header",
      selectors: ['.YCeq2g.OosofQ'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 4
    },
    {
      id: "canva-page-content",
      label: "Canva Page Content",
      selectors: ['.CAi1bQ .DPPJ_A ._mXnjA'],
      effect: "blur",
      defaultEnabled: true,
      defaultStrength: 16
    }
  ]
};
