const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, theme, e }) => {
  const userOptions = theme("animate", { iterate: [] });

  const delays = Object.fromEntries(
    Object.entries(theme("transitionDelay")).map(([k, v]) => [
      `.animate-delay-${k}`,
      { animationDelay: v },
    ])
  );

  const durations = Object.fromEntries(
    Object.entries(theme("transitionDelay")).map(([k, v]) => [
      `.animate-duration-${k}`,
      { animationDuration: v },
    ])
  );

  const names = Object.fromEntries(
    Object.keys(theme("keyframes")).map((key) => [
      `.animate-${key}`,
      { animationName: key },
    ])
  );

  const timingFuctions = Object.fromEntries(
    Object.entries(theme("transitionTimingFunction")).map(([k, v]) => [
      `.animate-ease-${k}`,
      { animationTimingFunction: v },
    ])
  );

  const playStates = {
    ".running": {
      animationPlayState: "running",
    },
    ".paused": {
      animationPlayState: "paused",
    },
  };

  const modes = Object.fromEntries(
    ["none", "forwards", "backwards", "both"].map((mode) => [
      `.fill-${mode}`,
      { animationFillMode: mode },
    ])
  );

  const directions = Object.fromEntries(
    ["normal", "reverse", "alternate", "alternate-reverse"].map((direction) => [
      `.direction-${direction}`,
      { animationDirection: direction },
    ])
  );

  const iterations = Object.fromEntries(
    [
      ...userOptions.iterate,
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "infinite",
    ].map((count) => [
      `.${e(`iterate-${count}`)}`,
      { animationIterationCount: count },
    ])
  );

  addUtilities(
    {
      ...delays,
      ...durations,
      ...names,
      ...timingFuctions,
      ...playStates,
      ...modes,
      ...directions,
      ...iterations,
    },
    ["responsive"]
  );
});
