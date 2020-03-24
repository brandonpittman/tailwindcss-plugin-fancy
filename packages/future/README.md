# Tailwind@future

These are settings that I could see being added to the Tailwind standard config
in the future.

## Spacer Components

Adds `space-{x,y}-$spacing` components that add leading margins for each child
element except for the first one. Reads `$spacing` from your theme.

```css
.space-y-4 > * + * {
margin-top: 1rem;
}
```

## Transition Delays

Adds `transition-delay` utilities that line up with the included Tailwind
`transition-duration` utilities. Reads from your theme.

## Enhance Tailwind 1.2 Config

```javascript
inset: {
    "1/4": "25%",
    "1/3": "33.333333%",
    "2/3": "66.666666%",
    "1/2": "50%",
    "3/4": "75%",
    "full": "100%",
    },
skew: {
    '1': '1deg',
    '2': '2deg',
    '4': '4deg',
    '5': '5deg',
    '10': '10deg',
    '15': '15deg',
    '20': '20deg',
    '90': '90deg',
    '-1': '-1deg',
    '-2': '-2deg',
    '-4': '-4deg',
    '-5': '-5deg',
    '-10': '-10deg',
    '-15': '-15deg',
    '-20': '-20deg',
    '-90': '-90deg',
  }
```
