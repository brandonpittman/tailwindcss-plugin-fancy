const plugin = require("tailwindcss/plugin");
const defaultIterate = [
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
  "15",
  "30",
  "45",
  "60",
  "infinite",
];

const defaultSteps = [
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
  "15",
  "30",
  "45",
  "60",
];

module.exports = plugin(
  ({ addUtilities, theme, e }) => {
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

    const timingFuctions = {
      ".animate-step-start": { animationTimingFunction: "jump-start" },
      ".animate-step-end": { animationTimingFunction: "jump-end" },
      ...Object.fromEntries(
        Object.entries(theme("transitionTimingFunction")).map(([k, v]) => [
          `.animate-ease-${k}`,
          { animationTimingFunction: v },
        ])
      ),
      ...Object.fromEntries(
        [...defaultSteps, ...theme("animate").steps].map((step) =>
          Array.isArray(step)
            ? [
                `.animate-step-${step[0]}-${step[1]}`,
                { animationTimingFunction: `steps(${step[0]}, ${step[1]})` },
              ]
            : [
                `.animate-step-${step}`,
                { animationTimingFunction: `steps(${step})` },
              ]
        )
      ),
    };

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
      [
        "normal",
        "reverse",
        "alternate",
        "alternate-reverse",
      ].map((direction) => [
        `.direction-${direction}`,
        { animationDirection: direction },
      ])
    );

    const iterations = Object.fromEntries(
      [...defaultIterate, ...theme("animate").iterate].map((count) => [
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
        ".animate-none": {
          animationName: "none",
        },
        ".animate-spin": {
          animationName: "spin",
        },
        ".animate-ping": {
          animationName: "ping",
        },
        ".animate-pulse": {
          animationName: "pulse",
        },
        ".animate-bounce": {
          animationName: "bounce",
        },
      },
      ["responsive", "hover", "focus", "group-hover", "group-focus"]
    );
  },
  {
    theme: {
      animate: {
        iterate: defaultIterate,
        steps: defaultSteps,
      },
    },
  }
);
