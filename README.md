# tailwindcss-plugin-fancy

This plugin merely wraps up a collection of other plugins I've written for
Tailwind that makes my life/job easier.

## Usage

```javascript
const fancy = require("tailwindcss-plugin-fancy");

// tailwind.config.js
module.export = {
  // ...
  plugins: [fancy],
};
```

## Animation

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

### Utilities

```css
.animate-${name} {
  /* the name is a keyframe just how the standard Tailwind animation plugin requires */
}

.animate-duration-${n} {
  /* duration-${n} */
}

.animate-delay-${n} {
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

### Make It Your Own

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

## Stylable Scrollbars

Style your scrollbars!

```css
/* W3C scrollbar styling standard (Firefox) */
body {
  scrollbar-width: thin; /* "auto" or "thin"  */
  scrollbar-color: blue orange; /* scroll thumb & track */
}

/* Webkit family of browsers (Safari, Chrome, etc.) */
body::-webkit-scrollbar {
  width: 16px; /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: orange; /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: blue; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid orange; /* creates padding around scroll thumb */
}
```

### Utilities

```css
/* You need to add this first one to make the other utilities work, a la Tailwind's transform utility.) */
.scrollbar .scrollbar-thumb-$color /* var(--scrollbar-thumb) */
  .scrollbar-track-$color /* var(--scrollbar-track) */ .scrollbar-auto
  /* var(--scrollbar-width-webkit) 16px for -webkit */ .scrollbar-thin
  /* var(--scrollbar-width-webkit) 11px for -webkit */ .scrollbar-none
  /* var(--scrollbar-width-webkit) */
  /* The next two utilities will only work as expected on Chrome and Safari.
   Firefox follows the W3C standard which treats horizontal and vertical
   scrollabar width equally. On Firefox, they will hide BOTH scrollbars. */
  .scrollbar-x-none .scrollbar-y-none;
```

The `$color` bit can be any color in your theme. For best results, apply the
utilities to the `html` tag in your templates. Since they're just utilities,
you can apply different ones to scrollable elements within your site to have
multiple styles.

## Tailwind 2077

These are settings that I could see being added to the Tailwind standard config
in the future.

### Touch

There's a `touch` variant that targets `@media(hover: none)`.

### Not Touch

There's a `not-touch` variant that targets `@media(hover: hover)`.

### Bleed

Adds `.bleed` and `.bleed-grid` components to to make blog-style full bleed
images easier to handle.

### Stripes

This adds the nifty `bg-stripes` utils from Tailwind's documentation. Use
`bg-stripes` to turn the utility on and then add a `bg-stripes-${color}`
utility to actually set the stripe color.

You can also use `bg-stripes-{0, 45, 90, 135}` to control the angle.

### `word-break: keep-all`

CJK has serious issues with linebreaks. Use the `.break-keep-all` util and
place `<wbr/>` elements wherever a line _could_ break and see some nice
results!

```html
<p class="break-keep-all">
  この文書がちょっと
  <wbr/>
  長いかもしれません。
</p>
```
