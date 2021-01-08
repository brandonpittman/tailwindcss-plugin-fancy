const plugin = require("tailwindcss/plugin");
const postcss = require("postcss");
const selectorParser = require("postcss-selector-parser");

module.exports = plugin(({ addVariant, addUtilities, config, theme, e }) => {
  const basises = Object.fromEntries(
    Object.entries(theme("width")).map(([k, v]) => [
      `.${e(`basis-${k}`)}`,
      { flexBasis: v },
    ])
  );
  addUtilities({
    "@keyframes bg-warp": {
      from: { "background-position": "right" },
      to: { "background-position": "left" },
    },
  });
  addUtilities(
    {
      ".bg-skinny": {
        backgroundSize: "0% 100%",
      },
      ".bg-flat": {
        backgroundSize: "100% 0%",
      },
      ".bg-full": {
        backgroundSize: "100% 100%",
      },
      ".bg-fat": {
        backgroundSize: "200% 200%",
      },
      ".bg-jumbo": {
        backgroundSize: "400% 400%",
      },
      ".debug": {
        border: `1px solid ${theme("colors.red['600']")}`,
      },
      ...basises,
    },
    ["responsive"]
  );
  addVariant("group-disabled", ({ modifySelectors, separator }) => {
    const prefixClass = function (className) {
      const prefix = config("prefix");
      const getPrefix = typeof prefix === "function" ? prefix : () => prefix;
      return `${getPrefix(`.${className}`)}${className}`;
    };

    return modifySelectors(({ selector }) => {
      // This would be the better solution once :is() can be used in
      // Chrome.
      //   const is = selectorParser(selectors => {
      //     selectors.walkClasses(classNode => {
      //       classNode.value = `group-disabled${separator}${classNode.value}`;
      //       classNode.parent.insertBefore(
      //         classNode,
      //         selectorParser().astSync(
      //           `:is(.${prefixClass("group")}[disabled],.${prefixClass(
      //             "group"
      //           )}:disabled) `
      //         )
      //       );
      //     });
      //   }).processSync(selector);
      // });
      const attr = selectorParser((selectors) => {
        selectors.walkClasses((classNode) => {
          classNode.value = `group-disabled${separator}${classNode.value}`;
          classNode.parent.insertBefore(
            classNode,
            selectorParser().astSync(`.${prefixClass("group")}[disabled] `)
          );
        });
      }).processSync(selector);
      const pseudo = selectorParser((selectors) => {
        selectors.walkClasses((classNode) => {
          classNode.value = `group-disabled${separator}${classNode.value}`;
          classNode.parent.insertBefore(
            classNode,
            selectorParser().astSync(`.${prefixClass("group")}:disabled `)
          );
        });
      }).processSync(selector);

      return attr + ", " + pseudo;
    });
  });
  addVariant("invalid", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`invalid${separator}${className}`)}:invalid`;
    });
  });
  addVariant("invalid-focus", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`invalid-focus${separator}${className}`)}:invalid:focus`;
    });
  });
  addVariant("touch", ({ container, separator }) => {
    const supportsRule = postcss.atRule({
      name: "media",
      params: "(hover: none)",
    });
    supportsRule.append(container.nodes);
    container.append(supportsRule);
    supportsRule.walkRules((rule) => {
      rule.selector = `.${e(`touch${separator}${rule.selector.slice(1)}`)}`;
    });
  });
});
