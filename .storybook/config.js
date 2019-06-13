import { configure, addParameters, addDecorator, load } from '@storybook/react'
import { create } from '@storybook/theming'
import { setConsoleOptions } from '@storybook/addon-console'
import { withA11y } from '@storybook/addon-a11y'

// import { withTests } from '@storybook/addon-jest'

addDecorator(
//   withTests({
//     results,
//   }),
   withA11y
 );

addParameters({
  options: {
    theme: create({
      colorSecondary: '#35506c', base: 'light', barSelectedColor: '#35506c', brandTitle: "Campus 2019 - Storybook"
    }),
    isFullscreen: false,
    panelPosition: 'right',
    showAddonPanel: true,
  },
  info: {
    inline: true, source: false, header: false, styles: {
      infoBody: {
        border: 0,
        fontFamily: 'Open Sans',
        padding: '50px 0 0 0',
      },
    },
  },
  // viewport: { viewports: newViewports }
});

setConsoleOptions({
  panelExclude: [],
});

// automatically import all story js files that end with *.stories.js
const req = require.context("../src/stories", true, /\.stories\.js$/);

function loadStories() {
  
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);