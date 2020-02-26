# tailwindcss-plugin-fancy

This plugin merely wraps up a collection of other plugins I've written for
Tailwind that makes my life/job easier. Plugins include:

- tailwindcss-plugin-content
- tailwindcss-plugin-animated
- tailwindcss-plugin-design
- tailwindcss-plugin-aspect
- tailwindcss-plugin-decoration
- tailwindcss-plugin-future
- tailwindcss-plugin-heroicons
- @tailwindcss/custom-forms

## Usage

```javascript
// import everything
require('tailwindcss-plugin-fancy')

// selectively import packages
const { future, aspect } = require('tailwindcss-plugin-fancy')
```

**Please refer to each individual plugin's documentation for instructions. See `/packages` for more.**
