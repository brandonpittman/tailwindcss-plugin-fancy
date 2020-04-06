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
