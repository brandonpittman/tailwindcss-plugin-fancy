# Animate

## Motivation

The Tailwind animation utility is nice, but it lacks the flexibility of the
transition utilities. This plugin adds support for the following:

- animation-name
- animation-duration
- animation-delay
- animation-fill-mode
- animation-direction
- animation-iteration
- animation-timing-function
- animation-play-state

## Utilities

```css
.animate-${name} {
  /* the name is a keyframe just how the standard Tailwind animation plugin requires */
}

.animate-duration {
  /* duration-${n} */
}

.animate-delay {
  /* delay-${n} */
}

.animate-ease-${ease} {
  animation-timing-function: /* ease-${linear, in, out, in-out} */
}

.running {
  animation-play-state: running
}

.paused {
  animation-play-state: paused
}

.direction-${normal, reverse, alternate, alternate-reverse} {
  animation-direction: /* normal, reverse, alternate, alternate-reverse */
}

.iterate-${n} {
  animation-iteration-count: ${n} /* 0-12 and infinite */
}

.fill-${none, forwards, backwards, both} {
  animation-fill-mode: /* none, forwards, backwards, both */
}
```

## Make It Your Own

The delay, duration, and timing function utilities pull from the transtion
counterparts in your theme. To add to the iteration counts, provide something
like the following in `tailwind.config.js`.

```javascript
theme: {
  animate: {
    iterate: ["1.5", "2.5"];
  }
}
```

The iteration values must be strings. Pure numbers will be rendered as `px` by
Tailwind otherwise.

## New in 2.4

`animation-timing-function` gets support for steps!

```css
.animate-steps-5 {
  animation-timing-function: steps(5);
}

.animate-step-start {
  animation-timing-function: steps(1, jump-start);
}

.animate-step-end {
  animation-timing-function: steps(1, jump-end);
}
```

Steps go from 0–12, then 15, 30, 45, and 60 by default.

Add your own in `tailwind.config.js`.

```javascript
theme: {
  extend: {
    animate: {
      steps: [
        17, // creates a steps(17) class as .animate-step-17
        [47, "jump-both"]  // creates a steps(47, jump-both) class as .animate-step-47-jump-both
    }
  }
}
```
