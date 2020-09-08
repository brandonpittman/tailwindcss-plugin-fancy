const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  ({ addUtilities, theme, e }) => {
    const delays = Object.fromEntries(
      Object.entries(theme("transitionDelay")).map(([k, v]) => [
        `.animate-delay-${k}`,
        { animationDelay: v, "--animate-delay": v },
      ])
    );

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
        ...delays,
        ...basises,
      },
      ["responsive"]
    );
  },
  {
    theme: {
      extend: {
        animation: {
          spin: "spin 1s linear infinite var(--animate-delay, 0s)",
          ping:
            "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite var(--animate-delay, 0s)",
          pulse:
            "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite var(--animate-delay, 0s)",
          bounce: "bounce 1s infinite var(--animate-delay, 0s)",
        },
      },
    },
  }
);
