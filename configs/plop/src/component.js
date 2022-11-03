import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt';

export default function ComponentPlop(/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setPrompt('directory', inquirerFileTreeSelection);

  return plop.setGenerator('component', {
    description: 'New React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
      {
        type: 'directory',
        name: 'directory',
        message: 'choose where to generate component',
        // @ts-ignore
        onlyShowDir: true,
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{directory}}/{{kebabCase name}}/index.ts',
        templateFile: './templates/component/index.hbs',
      },
      {
        type: 'add',
        path: '{{directory}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: './templates/component/component.hbs',
      },
      {
        type: 'add',
        path: '{{directory}}/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: './templates/component/spec.hbs',
      },
      {
        type: 'add',
        path: '{{directory}}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: './templates/component/story.hbs',
      },
      {
        type: 'append',
        path: '{{ directory }}/index.ts',
        pattern: /;(?=[^;]*$)/g,
        template: "export * from './{{ kebabCase name }}';",
      },
    ],
  });
}
