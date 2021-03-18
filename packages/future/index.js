const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const postcss = require("postcss");
const selectorParser = require("postcss-selector-parser");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const { toRgba } = require("tailwindcss/lib/util/withAlphaVariable");

module.exports = plugin(
  ({ addVariant, addComponents, addUtilities, config, theme, e }) => {
    const makeBlur = (v) => ({
      backdropFilter: `blur(${defaultTheme.spacing[v]})`,
      "-webkit-backdrop-filter": `blur(${defaultTheme.spacing[v]})`,
    });

    const blurScale = [...new Array(6)].map((_v, idx) => idx);

    const blurs = {
      ...Object.fromEntries(
        blurScale.map((v) => [`.bg-glass-${v}`, makeBlur(v)])
      ),
      ".border-glass": { border: "1px solid rgba( 255, 255, 255, 0.18 )" },
    };

    const stripes = {
      ".bg-stripes": {
        backgroundImage:
          "linear-gradient(var(--stripes-angle, 45deg), var(--stripes-color) 12.50%, transparent 12.50%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62.50%, transparent 62.50%, transparent 100%)",
        backgroundSize: "5.66px 5.66px",
      },
      ".bg-stripes-0": { "--stripes-angle": "0deg" },
      ".bg-stripes-45": { "--stripes-angle": "45deg" },
      ".bg-stripes-90": { "--stripes-angle": "90deg" },
      ".bg-stripes-135": { "--stripes-angle": "135deg" },
    };

    const addColor = (name, color) =>
      (stripes[`.bg-stripes-${name}`] = { "--stripes-color": color });

    const colors = flattenColorPalette(theme("backgroundColor"));
    for (let name in colors) {
      try {
        const [r, g, b, a] = toRgba(colors[name]);
        if (a !== undefined) {
          addColor(name, colors[name]);
        } else {
          addColor(name, `rgba(${r}, ${g}, ${b}, 0.4)`);
        }
      } catch (_) {
        addColor(name, colors[name]);
      }
    }

    addUtilities(stripes, ["responsive"]);

    addUtilities(blurs, ["responsive"]);

    const fullBleed = {
      ".bleed-grid": {
        display: "grid",
        gridTemplateColumns: "1fr min(65ch, 100%) 1fr",
        "& > *": {
          gridColumn: "2",
        },
      },
      ".bleed": {
        width: "100%",
        gridColumn: "1/4",
      },
    };

    addComponents(fullBleed, ["responsive"]);
    const scrollSnap = {
      ".scroll-snap-none": { scrollSnapType: "none" },
      ".scroll-snap-x": { scrollSnapType: "x" },
      ".scroll-snap-y": { scrollSnapType: "y" },
    };
    addUtilities(scrollSnap, ["responsive"]);

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
  }
);
