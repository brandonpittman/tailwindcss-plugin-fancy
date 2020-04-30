const _ = require("lodash");

module.exports = function ({ theme, e }) {
  const keyframes = {
    bounce: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-5px)" },
    },
  };
  return _.map(theme("keyframes", keyframes), (keyframe, name) => {
    return {
      [`@keyframes ${e(name)}`]: keyframe,
    };
  });
};
