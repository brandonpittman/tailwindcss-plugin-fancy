# tailwindcss-plugin-animated

Adds a whole bunch of animations to Tailwind. It's got a spinner animation,
background gradient animations using background-size, and some utilities to
handle background-sizes.

Of note, you add background gradients like this:

```js
theme: {
  gradients: {
    awesome: {
      type: 'linear',
      direction: 'to right',
      colors: ['blue', 'skyblue', 'white']
    }
  }
}
```

This will give you a `.bg-awesome`. If you then add `.bg-jumbo` and `.bg-warp`,
you'll get a background that flows from one color to the next.
