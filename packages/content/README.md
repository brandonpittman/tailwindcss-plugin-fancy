# tailwindcss-plugin-content

## Utilities

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

## Variants

This plugin also adds `after:` and `before:` variants to all the utilities you
might want to use to style pseudo elements. That means if you wanted to add a
little blue circle that takes up the whole element, you could do so by writing
this:

```html
<div class="relative h-64 w-64 after:content-none after:absolute after:bg-blue-500 after:inset-0 after:rounded-full"></div>
```

Essentially, it's one less thing to have to create an actual CSS file for.
