# Tailwind Scrollbars

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

## Utilities

```css
/* You need to add this first one to make the other utilities work, a la Tailwind's transform utility.) */
.scrollbar
.scrollbar-thumb-$color /* var(--scrollbar-thumb) */
.scrollbar-track-$color /* var(--scrollbar-track) */
.scrollbar-auto /* var(--scrollbar-width-webkit) 16px for -webkit */
.scrollbar-thin /* var(--scrollbar-width-webkit) 11px for -webkit */
.scrollbar-none /* var(--scrollbar-width-webkit) */

/* The next two utilities will only work as expected on Chrome and Safari.
   Firefox follows the W3C standard which treats horizontal and vertical
   scrollabar width equally. On Firefox, they will hide BOTH scrollbars. */

.scrollbar-x-none
.scrollbar-y-none;
```

The `$color` bit can be any color in your theme. For best results, apply the utilities to the `html` tag in your templates. Since they're just utilities, you can apply different ones to scrollable elements within your site to have multiple styles.

## Future

I could see adding options to the plugin to allow for user-set default colors and widths.
