const _ = require("lodash");

module.exports = function ({ theme, e }) {
  const keyframes = {};

  return _.map(theme("keyframes", keyframes), (keyframe, name) => {
    return {
      [`@keyframes ${e(name)}`]: keyframe,
    };
  });
};
