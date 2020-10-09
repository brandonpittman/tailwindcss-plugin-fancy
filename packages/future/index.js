const plugin = require("tailwindcss/plugin");
const postcss = require("postcss");

module.exports = plugin(({ addVariant, addUtilities, theme, e }) => {
  const basises = Object.fromEntries(
    Object.entries(theme("width")).map(([k, v]) => [
      `.${e(`basis-${k}`)}`,
      { flexBasis: v },
    ])
  );

  addUtilities(
    {
      ".debug": {
        border: `1px solid ${theme("colors.red['600']")}`,
      },
      ...basises,
    },
    ["responsive"]
  );

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
