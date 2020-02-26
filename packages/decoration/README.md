# tailwindcss-plugin-decoration

Put simply, this plugin adds utilities for all the *kinda supported* text-decoration properties that have popped up lately. These include:

```javascript
const decorationStyles = {
    '.overline': {
      textDecorationLine: 'overline'
    },
    '.decoration-skip-none': {
      textDecorationSkip: 'none'
    },
    '.decoration-skip-objects': {
      textDecorationSkip: 'objects'
    },
    '.decoration-skip-spaces': {
      textDecorationSkip: 'spaces'
    },
    '.decoration-skip-edges': {
      textDecorationSkip: 'edges'
    },

    '.decoration-skip-ink': {
      textDecorationSkipInk: 'auto'
    },
    '.decoration-skip-ink-none': {
      textDecorationSkipInk: 'none'
    },

    '.underline-double': {
      textDecorationStyle: 'double'
    },
    '.underline-dotted': {
      textDecorationStyle: 'dotted'
    },
    '.underline-dashed': {
      textDecorationStyle: 'dashed'
    },
    '.underline-wavy': {
      textDecorationStyle: 'wavy'
    }
  }
```

It also adds a whole bunch of variations of `.underline-thickness-${key}`, `.underline-offset-${key}`, and `.decoration-${key}`, using your spacing scale and color palette. I'm also including `currentColor` helpers like `.decoration-current`, `.bg-current`, `.border-current`
