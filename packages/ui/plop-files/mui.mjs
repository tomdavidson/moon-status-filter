import fs from 'node:fs';
import path from 'node:path';

import autocomplete from 'inquirer-autocomplete-prompt';

const srcPath = path.resolve(process.cwd(), './node_modules/@mui/material');
const components = fs
  .readdirSync(srcPath)
  .map((file) => path.join(srcPath, file))
  .filter((file) => fs.statSync(file).isDirectory())
  .map((dir) => dir.split('/').at(-1));

const filterComponents = (/** @type {string} */ query) =>
  components.filter((name) => name?.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
const searchComponents = (/** @type {unknown} */ _, /** @type {string} */ input) =>
  Promise.resolve(input ? filterComponents(input) : components);

export default function ComponentPlop(/** @type {import('plop').NodePlopAPI} */ plop) {
  const destPath = './src/foundation/';
  plop.setPrompt('autocomplete', autocomplete);

  return plop.setGenerator('MUI Import', {
    description: 'Imports an MUI component',
    prompts: [
      {
        type: 'autocomplete',
        name: 'component',
        message: 'Search for the component to import',
        source: searchComponents,
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${destPath}/stories/{{kebabCase component}}.stories.tsx`,
        templateFile: './templates/mui/story.hbs',
      },
      {
        type: 'append',
        path: `${destPath}index.ts`,
        pattern: 'styled,',
        template: '  {{component}},\n  {{component}}Props,',
      },
    ],
  });
}
