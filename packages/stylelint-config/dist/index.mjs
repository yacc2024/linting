const index = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-vue",
    "stylelint-config-recommended-less",
    "stylelint-config-recommended-vue"
  ],
  plugins: ["stylelint-order"],
  overrides: [
    {
      files: ["**/*.(less|css|vue|html)"],
      customSyntax: "postcss-less"
    },
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html"
    }
  ],
  ignoreFiles: [
    "**/*.js",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.ts",
    "**/*.json",
    "**/*.md",
    "**/*.yaml",
    "dist/**",
    "output/**",
    "node_modules/**",
    "public/**"
  ],
  rules: {
    "import-notation": null,
    "selector-not-notation": null,
    "no-descending-specificity": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep"]
      }
    ],
    "function-no-unknown": [true, { ignoreFunctions: ["lighten", "darken", "fade"] }],
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "justify-content",
      "align-items",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "font-size",
      "font-family",
      "text-align",
      "text-justify",
      "text-indent",
      "text-overflow",
      "text-decoration",
      "white-space",
      "color",
      "background",
      "background-position",
      "background-repeat",
      "background-size",
      "background-color",
      "background-clip",
      "border",
      "border-style",
      "border-width",
      "border-color",
      "border-top-style",
      "border-top-width",
      "border-top-color",
      "border-right-style",
      "border-right-width",
      "border-right-color",
      "border-bottom-style",
      "border-bottom-width",
      "border-bottom-color",
      "border-left-style",
      "border-left-width",
      "border-left-color",
      "border-radius",
      "opacity",
      "filter",
      "list-style",
      "outline",
      "visibility",
      "box-shadow",
      "text-shadow",
      "resize",
      "transition"
    ]
  }
};

export { index as default };
