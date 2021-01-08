# Tailwind@future

These are settings that I could see being added to the Tailwind standard config
in the future.

## Variants

### Invalid & Invalid Focus

Can use `invalid` and `invalid-focus` variants.

### Group Disabled

Added a `group-disabled` variant similar to `group-hover`. Works with
`element[disabled]` and `element:disabled`. Will replace in the future with an
`is:([disabled], :disabled)` implementation.

### Touch

There's a `touch` variant that targets `@media(hover: none)`.

## Flex-basis

These utilities add `.basis-${width}` matching everything in your `width` theme key.

## Animation Delay

These utilities add `.animate-delay-${delay}` matching everything in your
`transtransitionDelay` theme key.

## Misc.

Adds a `.debug` utility that puts a red box around an element (for debugging).
