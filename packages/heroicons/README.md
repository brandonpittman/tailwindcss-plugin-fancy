# tailwindcss-plugin-heroicons

Adds refactoringui/heroicons as utilities to your Tailwind project.

Refer to Heroicons' file list to see what's available.

## Usage

If an SVG was in `solid-sm` and its filename was `sm-annotation.svg`, you'd use it like so...

```html
<div class="sm-annotation h-8 w-8"></div>
```

All utilities come as base64 encoded background images and have their background height set to 100%.

Modify variants to be added by passing an object with a `variants` key when requiring.

```javascript
plugins: [
  require('tailwindcss-plugin-heroicons')({variants: ['responsive', 'hover']})
]
```
