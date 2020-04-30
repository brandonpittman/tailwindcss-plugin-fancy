const _ = require("lodash");

module.exports = function ({ theme, e }) {
  const animations = {
    ".bg-warp-slowest": {
      animation: "bg-warp 40s ease-in-out infinite alternate",
    },
    ".bg-warp-slower": {
      animation: "bg-warp 20s ease-in-out infinite alternate",
    },
    ".bg-warp-slow": {
      animation: "bg-warp 10s ease-in-out infinite alternate",
    },
    ".bg-warp": {
      animation: "bg-warp 4s ease-in-out infinite alternate",
    },
    ".bg-warp-fast": {
      animation: "bg-warp 2s ease-in-out infinite alternate",
    },
    ".bg-warp-faster": {
      animation: "bg-warp 1s ease-in-out infinite alternate",
    },
    ".bg-warp-fastest": {
      animation: "bg-warp 500ms ease-in-out infinite alternate",
    },
    ".bg-warp-lightspeed": {
      animation: "bg-warp 200ms ease-in-out infinite alternate",
    },
    ".spin-slowest": {
      animation: "spin 20 linear infinite",
    },
    ".spin-slower": {
      animation: "spin 16s linear infinite",
    },
    ".spin-slow": {
      animation: "spin 8s linear infinite",
    },
    ".spin": {
      animation: "spin 4s linear infinite",
    },
    ".spin-fast": {
      animation: "spin 2s linear infinite",
    },
    ".spin-faster": {
      animation: "spin 1s linear infinite",
    },
    ".spin-fastest": {
      animation: "spin 500ms linear infinite",
    },
    ".shake": {
      animation: "shake 500ms",
    },
    ".bounce": {
      animation: "bounce 500ms infinite ease-in-out alternate",
    },
  };

  _.map(theme("animations", {}), (animation, name) => {
    animations[`.${e(name)}`] = {
      animation,
    };
  });

  return animations;
};
