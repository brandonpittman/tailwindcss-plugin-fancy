import plugin from "tailwindcss/plugin";
import future from "./future";
import scrollbars from "./scrollbars";
import animate from "./animate";

const plugins = [future, scrollbars, animate];

module.exports = plugin(
  (helpers: any) => {
    plugins.forEach((plugin) => plugin.handler(helpers));
  },
  {
    variants: {
      ...animate.config.variants,
    },
    theme: {
      extend: {
        transitionDelay: {
          2000: "2000ms",
          3000: "3000ms",
          4000: "4000ms",
          5000: "5000ms",
        },
        transitionDuration: {
          2000: "2000ms",
          3000: "3000ms",
          4000: "4000ms",
          5000: "5000ms",
        },
        minWidth: (theme) => theme("width"),
        maxWidth: (theme) => theme("width"),
        minHeight: (theme) => theme("height"),
        maxHeight: (theme) => theme("height"),
        ...animate.config.theme,
      },
    },
  }
);
