# tailwindcss-plugin-fancy

This plugin merely wraps up a collection of other plugins I've written for
Tailwind that makes my life/job easier.

## Usage

```javascript
const fancy = require("tailwindcss-plugin-fancy");

// tailwind.config.js
module.export = {
  // ...
  plugins: [fancy]
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

The iteration values must be strings. Pure numbers will be rendered as `px` by
Tailwind otherwise.

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

## Pseudo Elements

### Utilities

This plugin adds a bunch of `:after` and `:before`-specific utilities to
Tailwind. Essentially, you can start styling pseudo elements by appending
classes to the regular elements they belong to.

```javascript
'.content-none': {
  content: '\'\''
},
'.content-data-src': {
  content: 'attr(src)'
},
'.content-data-href': {
  content: 'attr(href)'
},
'.content-data-title': {
  content: 'attr(title)'
},
'.content-data-lang': {
  content: 'attr(lang)'
},
'.content-data-before': {
  content: 'attr(data-before)'
},
'.content-data-after': {
  content: 'attr(data-after)'
},
'.content-var-before': {
  content: 'var(--before)'
},
'.content-var-after': {
  content: 'var(--after)'
},
'.content-open-quote': {
  content: 'open-quote'
},
'.content-close-quote': {
  content: 'close-quote'
},
'.-z-10': {
  zIndex: '-10'
},
'.-z-20': {
  zIndex: '-20'
},
'.-z-30': {
  zIndex: '-30'
},
'.-z-40': {
  zIndex: '-40'
},
'.-z-50': {
  zIndex: '-50'
},
```

### Variants

This plugin also adds `after:` and `before:` variants to all the utilities you
might want to use to style pseudo elements. That means if you wanted to add a
little blue circle that takes up the whole element, you could do so by writing
this:

```html
<div
  class="relative h-64 w-64 after:content-none after:absolute after:bg-blue-500 after:inset-0 after:rounded-full"
></div>
```

Essentially, it's one less thing to have to create an actual CSS file for.

## Text Decoration

This adds utilities for all the _kinda supported_ text-decoration properties
that have popped up lately. These include:

```javascript
const decorationStyles = {
  ".overline": {
    textDecorationLine: "overline"
  },
  ".decoration-skip-none": {
    textDecorationSkip: "none"
  },
  ".decoration-skip-objects": {
    textDecorationSkip: "objects"
  },
  ".decoration-skip-spaces": {
    textDecorationSkip: "spaces"
  },
  ".decoration-skip-edges": {
    textDecorationSkip: "edges"
  },

  ".decoration-skip-ink": {
    textDecorationSkipInk: "auto"
  },
  ".decoration-skip-ink-none": {
    textDecorationSkipInk: "none"
  },

  ".underline-double": {
    textDecorationStyle: "double"
  },
  ".underline-dotted": {
    textDecorationStyle: "dotted"
  },
  ".underline-dashed": {
    textDecorationStyle: "dashed"
  },
  ".underline-wavy": {
    textDecorationStyle: "wavy"
  }
};
```

It also adds a whole bunch of variations of `.underline-thickness-${key}`,
`.underline-offset-${key}`, and `.decoration-${key}`, using your spacing scale
and color palette. I'm also including `currentColor` helpers like
`.decoration-current`, `.bg-current`, `.border-current`

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

The `$color` bit can be any color in your theme. For best results, apply the utilities to the `html` tag in your templates. Since they're just utilities, you can apply different ones to scrollable elements within your site to have multiple styles.

## Tailwind 2077

These are settings that I could see being added to the Tailwind standard config
in the future.

### Invalid & Invalid Focus Variants

Can use `invalid` and `invalid-focus` variants.

### Group Disabled

Added a `group-disabled` variant similar to `group-hover`. Works with
`element[disabled]` and `element:disabled`. Will replace in the future with an
`is:([disabled], :disabled)` implementation.

### Touch

There's a `touch` variant that targets `@media(hover: none)`.

## Flex-basis

These utilities add `.basis-${width}` matching everything in your `width` theme key.

## Animation Delay

These utilities add `.animate-delay-${delay}` matching everything in your
`transtransitionDelay` theme key.

### Debug

Adds a `.debug` utility that puts a red box around an element (for debugging).

### Bleed

Adds `.bleed` and `.bleed-grid` components to to make blog-style full bleed images easier to handle.

### Scroll Snap

Adds scroll-snap utils.

```
.scroll-snap-none
.scroll-snap-x
.scroll-snap-y
```

### Stripes

This adds the nifty `bg-stripes` utils from Tailwind's documentation. Use `bg-stripes` to turn the utility on and then add a `bg-stripes-${color}` utility to actually set the stripe color.

You can also use `bg-stripes-{0, 45, 90, 135}` to control the angle.
