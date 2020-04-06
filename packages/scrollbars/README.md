# Tailwind Scrollbars

Style your scrollbars!

```css
/* W3C scrollbar styling standard (Firefox) */
body {
  scrollbar-width: thin;          /* "auto" or "thin"  */
  scrollbar-color: blue orange;   /* scroll thumb & track */ 
}

/* Webkit family of browsers (Safari, Chrome, etc.) */
body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: orange;        /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: blue;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid orange;  /* creates padding around scroll thumb */
}
```

## Utilities

```css
- .scrollbar /* You need to add this to make the other utilities work, a la Tailwind's transform utility.) */
- .scrollbar-thumb-$color
- .scrollbar-track-$color
- .scrollbar-auto /* 14px for -webkit */
- .scrollbar-thin /* 12px for -webkit */
- .scrollbar-none
```

The `$color` bit can be any color in your theme. For best results, apply the utilities to the `html` tag in your templates. Since they're just utilities, you can apply different ones to scrollable elements within your site to have multiple styles.

## Future

I could see adding options to the plugin to allow for user-set default colors and widths.
