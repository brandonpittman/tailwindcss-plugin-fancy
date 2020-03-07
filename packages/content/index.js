const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, addVariant, e}) => {
  const content = {
    '.content-none': {content: '\'\''},
    '.content-data-src': {content: 'attr(src)'},
    '.content-data-href': {content: 'attr(href)'},
    '.content-data-title': {content: 'attr(title)'},
    '.content-data-lang': {content: 'attr(lang)'},
    '.content-data-before': {content: 'attr(data-before)'},
    '.content-data-after': {content: 'attr(data-after)'},
    '.content-var-before': {content: 'var(--before)'},
    '.content-var-after': {content: 'var(--after)'},
    '.content-open-quote': {content: 'open-quote'},
    '.content-close-quote': {content: 'close-quote'}
  };

  const utilities = {
    '.visuallyhidden': {position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: '0', overflow: 'hidden', textIndent: '-9999px', zIndex: '0'},
    '.-z-10': {zIndex: '-10'},
    '.-z-20': {zIndex: '-20'},
    '.-z-30': {zIndex: '-30'},
    '.-z-40': {zIndex: '-40'},
    '.-z-50': {zIndex: '-50'}
  };

  addUtilities(utilities, ['responsive']);

  addUtilities(content, {variants: ['before', 'after']});

  const variants = ['before', 'after'];

  variants.forEach(variant => {
    addVariant(variant, ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.${e(`${variant}${separator}${className}`)}:${variant}`;
      });
    });
  });
}, {
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    backgroundImage: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'after', 'before'],
    borderRadius: ['responsive', 'hover', 'focus', 'after', 'before'],
    borderWidth: ['responsive', 'hover', 'focus', 'after', 'before'],
    display: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    height: ['responsive', 'hover', 'focus', 'after', 'before'],
    inset: ['responsive', 'hover', 'focus', 'after', 'before'],
    margin: ['responsive', 'hover', 'focus', 'after', 'before'],
    opacity: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    position: ['responsive', 'hover', 'focus', 'after', 'before'],
    textColor: ['responsive', 'hover', 'focus', 'after', 'before', 'group-hover'],
    width: ['responsive', 'hover', 'focus', 'after', 'before'],
    zIndex: ['responsive', 'hover', 'focus', 'after', 'before'],
    transform: ['responsive', 'hover', 'focus', 'after', 'before'],
    transformOrigin: ['responsive', 'hover', 'focus', 'after', 'before'],
    scale: ['responsive', 'hover', 'focus', 'after', 'before'],
    rotate: ['responsive', 'hover', 'focus', 'after', 'before'],
    translate: ['responsive', 'hover', 'focus', 'after', 'before'],
    transitionProperty: ['responsive', 'hover', 'focus', 'after', 'before'],
    transitionTimingFunction: ['responsive', 'hover', 'focus', 'after', 'before'],
    transitionDuration: ['responsive', 'hover', 'focus', 'after', 'before']
  }
});
