import plugin from 'tailwindcss/plugin';
import content from './content';
import decoration from './decoration';
import future from './future';
import scrollbars from './scrollbars';
import animate from './animate';

const plugins = [content, future, scrollbars, decoration, animate];

export default plugin(
  helpers => {
    plugins.forEach(plugin => plugin.handler(helpers));
  },
  {
    variants: {
      ...content.config.variants,
      ...animate.config.variants,
    },
    theme: {
      extend: {
        transitionDelay: {
          2000: '2000ms',
          3000: '3000ms',
          4000: '4000ms',
          5000: '5000ms',
        },
        transitionDuration: {
          2000: '2000ms',
          3000: '3000ms',
          4000: '4000ms',
          5000: '5000ms',
        },
        minWidth: theme => theme('width'),
        maxWidth: theme => theme('width'),
        minHeight: theme => theme('height'),
        maxHeight: theme => theme('height'),
        ...animate.config.theme,
      },
    },
  }
);

export { future, content, decoration, scrollbars, animate };
