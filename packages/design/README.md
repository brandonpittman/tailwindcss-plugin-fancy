# tailwindcss-plugin-design

A theme plugin that follows the *Tailwind way*!

## Add light and dark variants

```js
screens: {
  dark: {raw: '(prefers-color-scheme: dark)'},
  light: {raw: '(prefers-color-scheme: light)'}
}
```

## Create a place for text and color styles

```js
// tailwind.config.js
theme: {
  design: theme => ({
    text: {
      // Will create .text-title that is font-bold and text-4xl.
      title: {
        fontWeight: '700',
        fontSize: theme('fontSize.4xl')
      }
    },
    color: {
      // Will create @media(prefers-color-scheme: light) variants of .bg-action and .text-action of red-600
      // along with .text-on-action (which would be white).
      // If you supply a third color, that will be the dark versions of .bg-action and .text-action.
      // A fourth color would then be the .text-on-action for dark themes.
      action: [theme('colors.red.600'), 'white', theme('colors.red.200', theme('colors.red.800')]
    }
  })
}
```
