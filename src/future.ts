import plugin from "tailwindcss/plugin";
import postcss from "postcss";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import { toRgba } from "tailwindcss/lib/util/withAlphaVariable";

export default plugin(
  ({ addVariant, addComponents, addUtilities, theme, e }) => {
    const ariaCurrentValues = [
      "page",
      "step",
      "location",
      "date",
      "time",
      "true",
    ];

    addVariant("current", ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return [...ariaCurrentValues]
          .map(
            (val) =>
              `.${e(`current${separator}${className}`)}[aria-current="${val}"]`
          )
          .join(", ");
      });
    });

    addVariant("expanded", ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(
          `expanded${separator}${className}`
        )}[aria-expanded="true"], [aria-expanded="true"] > .${e(
          `expanded${separator}${className}`
        )}`;
      });
    });

    addVariant("selected", ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(
          `expanded${separator}${className}`
        )}[aria-selected="true"], [aria-selected="true"] > .${e(
          `expanded${separator}${className}`
        )}`;
      });
    });

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

    const addColor = (name: string, color: string) =>
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
      },
      ["responsive"]
    );

    addUtilities({
      ".w-128": { width: "32rem" },
      ".break-keep-all": {
        "word-break": "keep-all",
      },
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
    addVariant("not-touch", ({ container, separator }) => {
      const supportsRule = postcss.atRule({
        name: "media",
        params: "(hover: hover)",
      });
      supportsRule.append(container.nodes);
      container.append(supportsRule);
      supportsRule.walkRules((rule) => {
        rule.selector = `.${e(
          `not-touch${separator}${rule.selector.slice(1)}`
        )}`;
      });
    });
  }
);
