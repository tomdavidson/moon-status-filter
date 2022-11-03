// @ts-nocheck

import { ignores, selectConfigs } from './loaders.mjs';

const configurator = (selectors) => [
  {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: true,
    },
  },
  ...selectConfigs(['base', ...selectors, 'summit']),
  {
    ignores: ignores('**/*.?(git,prettier,eslint)ignore'),
  },
];

const nextjs = () => configurator(['ts-eslint', 'nodejs', 'reactjs', 'nextjs', 'jest']);
const nodejs = () => configurator(['ts-eslint', 'nodejs', 'jest']);

export { ignores, selectConfigs, configurator, nextjs, nodejs };
