const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  ({ addUtilities, addVariant, e }) => {
    const content = {
      ".content-none": { content: '""' },
      ".content-data-src": { content: "attr(src)" },
      ".content-data-href": { content: "attr(href)" },
      ".content-data-title": { content: "attr(title)" },
      ".content-data-lang": { content: "attr(lang)" },
      ".content-data-before": { content: "attr(data-before)" },
      ".content-data-after": { content: "attr(data-after)" },
      ".content-var-before": { content: "var(--before)" },
      ".content-var-after": { content: "var(--after)" },
      ".content-open-quote": { content: "open-quote" },
      ".content-close-quote": { content: "close-quote" },
    };

    addUtilities(content, { variants: ["before", "after"] });

    const variants = ["before", "after"];

    variants.forEach((variant) => {
      addVariant(variant, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`${variant}${separator}${className}`)}:${variant}`;
        });
      });
    });
  },
  {
    variants: {
      backgroundColor: ({ after }) => after(["before", "after"], "focus"),
      backgroundOpacity: ({ after }) => after(["before", "after"], "focus"),
      backgroundImage: ({ after }) => after(["before", "after"], "focus"),
      borderColor: ({ after }) => after(["before", "after"], "focus"),
      borderOpacity: ({ after }) => after(["before", "after"], "focus"),
      borderRadius: ({ after }) => after(["before", "after"], "focus"),
      borderWidth: ({ after }) => after(["before", "after"], "focus"),
      display: ({ after }) => after(["before", "after"], "focus"),
      height: ({ after }) => after(["before", "after"], "focus"),
      inset: ({ after }) => after(["before", "after"], "focus"),
      margin: ({ after }) => after(["before", "after"], "focus"),
      opacity: ({ after }) => after(["before", "after"], "focus"),
      position: ({ after }) => after(["before", "after"], "focus"),
      rotate: ({ after }) => after(["before", "after"], "focus"),
      scale: ({ after }) => after(["before", "after"], "focus"),
      textColor: ({ after }) => after(["before", "after"], "focus"),
      textOpacity: ({ after }) => after(["before", "after"], "focus"),
      textDecoration: ({ after }) => after(["before", "after"], "focus"),
      transform: ({ after }) => after(["before", "after"], "focus"),
      transformOrigin: ({ after }) => after(["before", "after"], "focus"),
      transitionDuration: ({ after }) => after(["before", "after"], "focus"),
      transitionProperty: ({ after }) => after(["before", "after"], "focus"),
      transitionTimingFunction: ({ after }) =>
        after(["before", "after"], "focus"),
      translate: ({ after }) => after(["before", "after"], "focus"),
      width: ({ after }) => after(["before", "after"], "focus"),
      zIndex: ({ after }) => after(["before", "after"], "focus"),
    },
  }
);
