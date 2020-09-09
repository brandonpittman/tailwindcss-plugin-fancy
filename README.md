# tailwindcss-plugin-fancy

This plugin merely wraps up a collection of other plugins I've written for
Tailwind that makes my life/job easier. Plugins include:

- [tailwindcss-plugin-animate](https://github.com/brandonpittman/tailwindcss-plugin-fancy/tree/master/packages/animate)
- [tailwindcss-plugin-content](https://github.com/brandonpittman/tailwindcss-plugin-fancy/tree/master/packages/content)
- [tailwindcss-plugin-aspect](https://github.com/brandonpittman/tailwindcss-plugin-fancy/tree/master/packages/aspect)
- [tailwindcss-plugin-decoration](https://github.com/brandonpittman/tailwindcss-plugin-fancy/tree/master/packages/decoration)
- [tailwindcss-plugin-scrollbars](https://github.com/brandonpittman/tailwindcss-plugin-fancy/tree/master/packages/scrollbars)
- [tailwindcss-plugin-future](https://github.com/brandonpittman/tailwindcss-plugin-fancy/tree/master/packages/future)

## Extensions

`min-h`, `max-h`, `min-w`, and `max-w` all get extended to the full `width` list of your
`theme`.

## Usage

```javascript
// import everything
const fancy = require("tailwindcss-plugin-fancy");

// import just the animate plugin
const animate = require("tailwindcss-plugin-fancy/animate");
```

**Please refer to each individual plugin's documentation for instructions.**
