const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, theme }) => {
  const scrollbarColors = {};

  for (const [key, v] of Object.entries(theme("colors"))) {
    if (typeof v === "string") {
      scrollbarColors[`.scrollbar-track-${key}`] = {
        "--scrollbar-track": v,
      };

      scrollbarColors[`.scrollbar-thumb-${key}`] = {
        "--scrollbar-thumb": v,
      };
    } else {
      for (const [k, newV] of Object.entries(theme("colors")[key])) {
        scrollbarColors[`.scrollbar-track-${key}-${k}`] = {
          "--scrollbar-track": newV,
        };

        scrollbarColors[`.scrollbar-thumb-${key}-${k}`] = {
          "--scrollbar-thumb": newV,
        };
      }
    }
  }

  addUtilities({
    ".scrollbar": {
      "--scrollbar-thumb": "#b5b5b5",
      "--scrollbar-track": "#f9f9f9",
      "--scrollbar-width": "auto",
      "--scrollbar-width-webkit": "14px",

      scrollbarWidth: "var(--scrollbar-width, initial)",
      scrollbarColor:
        "var(--scrollbar-thumb, initial) var(--scrollbar-track, initial)",

      "&::-webkit-scrollbar": {
        width: "var(--scrollbar-width-webkit)",
      },

      "&::-webkit-scrollbar-track": {
        backgroundColor: "var(--scrollbar-track)",
      },

      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "var(--scrollbar-thumb)",
        border: "3px solid var(--scrollbar-track)",
        borderRadius: "8px",
      },
    },
    ".scrollbar-auto": {
      scrollbarWidth: "auto",
      "--scrollbar-width-webkit": "14px",
    },
    ".scrollbar-thin": {
      scrollbarWidth: "thin",
      "--scrollbar-width-webkit": "12px",
    },
    ".scrollbar-none": {
      scrollbarWidth: "none",
      "--scrollbar-width-webkit": "0px",
    },
    ...scrollbarColors,
  });
}, {});
