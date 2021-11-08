import plugin from "tailwindcss/plugin";

export default plugin(({ addUtilities, variants, theme }) => {
  let { colors, spacing } = require("tailwindcss/defaultTheme");

  colors = {
    ...colors,
    ...theme("colors"),
  };

  const decorationStyles = {
    ".overline": {
      textDecorationLine: "overline",
    },
    ".decoration-skip-none": {
      textDecorationSkip: "none",
    },
    ".decoration-skip-objects": {
      textDecorationSkip: "objects",
    },
    ".decoration-skip-spaces": {
      textDecorationSkip: "spaces",
    },
    ".decoration-skip-edges": {
      textDecorationSkip: "edges",
    },

    ".decoration-skip-ink": {
      textDecorationSkipInk: "auto",
    },
    ".decoration-skip-ink-none": {
      textDecorationSkipInk: "none",
    },

    ".underline-double": {
      textDecorationStyle: "double",
    },
    ".underline-dotted": {
      textDecorationStyle: "dotted",
    },
    ".underline-dashed": {
      textDecorationStyle: "dashed",
    },
    ".underline-wavy": {
      textDecorationStyle: "wavy",
    },
  };

  const decorationColors = {
    ".decoration-current": {
      textDecorationColor: "currentColor",
    },
  };

  const decorationLines = {};

  for (const [key, value] of Object.entries(spacing)) {
    decorationLines[`.underline-thickness-${key}`] = {
      textDecorationThickness: value,
    };

    decorationLines[`.underline-offset-${key}`] = {
      textUnderlineOffset: value,
    };
  }

  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === "string") {
      decorationColors[`.decoration-${key}`] = {
        textDecorationColor: value,
      };
    } else {
      for (const [k, newV] of Object.entries(colors[key])) {
        decorationColors[`.decoration-${key}-${k}`] = {
          textDecorationColor: newV,
        };
      }
    }
  }

  const decorations = {
    ...decorationLines,
    ...decorationColors,
    ...decorationStyles,
  };

  addUtilities(decorations, variants("decoration", ["responsive", "hover"]));
});
