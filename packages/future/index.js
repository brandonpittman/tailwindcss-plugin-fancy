const plugin = require("tailwindcss/plugin");
const postcss = require("postcss");

module.exports = plugin(({ addVariant, addUtilities, theme, e }) => {
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

