// @ts-nocheck
// import ks from 'eslint-config-skipa/ks';
// export default ks;

import { env } from 'node:process';

import nextjs from '@next/eslint-plugin-next';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import { ignores } from 'eslint-config-skipa';
import comments from 'eslint-plugin-eslint-comments';
import functional from 'eslint-plugin-functional';
import imprt from 'eslint-plugin-import'; // 'import' is ambiguous and prettier had trouble
import jest from 'eslint-plugin-jest';
import jestFmt from 'eslint-plugin-jest-formatting';
import jsxa11y from 'eslint-plugin-jsx-a11y';
import md from 'eslint-plugin-markdown';
import n from 'eslint-plugin-n';
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import regexp from 'eslint-plugin-regexp';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import sb from 'eslint-plugin-storybook';
import testLib from 'eslint-plugin-testing-library';
import unicorn from 'eslint-plugin-unicorn';
import yml from 'eslint-plugin-yml';
import ymlParser from 'yaml-eslint-parser';
import editorconfig from 'eslint-plugin-editorconfig';
import jsonc from 'eslint-plugin-jsonc';

const IS_HEAVY = Boolean(env.LINT_HEAVY) || Boolean(env.CI);

const CONFIGS_GLOBS =
  '**/*{*.config.js,*.config.mjs,*.*rc.js,*.*rc.mjs,*.md/*.config.js,*.md/*.config.mjs,*.md/*.*rc.js,*.md/*.*rc.mjs}';
const JS_GLOBS = '**/{*.js,*.cjs,*.mjs,*.md/*.js,*.md/*.cjs,*.md/*.mjs}';
const MD_GLOBS = '**/*.md';
const TS_GLOBS = '**/{*.ts,*.md/*.ts}';
const TSX_GLOBS = '**/{*.tsx,*.md/*.tsx}';
const JSON_GLOB = '**/?(*.md/)*.json';
const JSONC_GLOB = '**/?(*.md/)*.jsonc';
const JSON5_GLOB = '**/?(*.md/)*.json5';
const YML_GLOBS = '**/{*.yaml,*.yml,*.md/*.yaml,*.md/*.yml}';
const JEST_GLOBS = '**/?(*.md/)*.{spec,test}.{t,j}s?(x)';
const REACTJS_GLOBS = '**/{*.tsx,*.md/*.tsx, *.js,*.md/*.js, *.ts,*.md/*.ts, *.js,*.md/*.js}';

// config for config files
const cfgConfig = [
  {
    files: [YML_GLOBS],
    plugins: { yml },
    languageOptions: {
      parser: ymlParser,
    },
    rules: { ...yml.configs.standard.rules },
  },
  {
    files: [JSON_GLOB, JSONC_GLOB, JSON5_GLOB],
    ignores: ['package.json'],
    plugins: [jsonc],
    languageOptions: {
      parser: 'jsonc-eslint-parser',
    },
  },
  {
    files: [JSON_GLOB],
    rules: { ...jsonc.configs['recommended-with-json'].rules },
  },

  {
    files: [JSONC_GLOB],
    plugins: [jsonc],
    rules: { ...jsonc.configs['recommended-with-jsonc'].rules },
  },

  {
    files: [JSON5_GLOB],
    rules: { ...jsonc.configs['recommended-with-json5'].rules },
  },
];

// base, starting point
const baseConfig = [
  {
    files: [MD_GLOBS, `${MD_GLOBS}/*`],
    plugins: { markdown: md },
    processor: 'markdown/markdown',
  },
  // base config for codes
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    files: [JS_GLOBS, TS_GLOBS, TSX_GLOBS, MD_GLOBS],
    plugins: {
      functional,
      import: imprt,
      promise,
      regexp,
      unicorn,
    },
    rules: {
      // disable function overloading entirely rather than defer to @typescript-eslint
      'no-redeclare': 2,
      'no-nested-ternary': 'off',

      ...unicorn.configs.recommended.rules,
      'unicorn/prefer-at': 1,
      'unicorn/better-regex': 2,
      'unicorn/consistent-function-scoping': 2,
      'unicorn/explicit-length-check': 2,
      'unicorn/no-array-push-push': 2,
      'unicorn/no-array-reduce': 2,
      'unicorn/no-await-expression-member': 2,
      'unicorn/no-for-loop': 2,
      'unicorn/no-instanceof-array': 2,
      'unicorn/no-new-array': 2,
      'unicorn/no-new-buffer': 2,
      'unicorn/no-unsafe-regex': 2,
      'unicorn/no-useless-length-check': 2,
      'unicorn/no-useless-spread': 2,
      'unicorn/no-useless-undefined': 2,
      'unicorn/prefer-array-find': 2,
      'unicorn/prefer-array-flat-map': 2,
      'unicorn/prefer-array-flat': 2,
      'unicorn/prefer-array-index-of': 2,
      'unicorn/prefer-array-some': 2,
      'unicorn/prefer-date-now': 2,
      'unicorn/prefer-default-parameters': 2,
      'unicorn/prefer-event-target': 2,
      'unicorn/prefer-export-from': [2, { ignoreUsedVariables: true }],
      'unicorn/prefer-includes': 2,
      'unicorn/prefer-logical-operator-over-ternary': 2,
      'unicorn/prefer-native-coercion-functions': 2,
      'unicorn/prefer-object-from-entries': 2,
      'unicorn/prefer-prototype-methods': 2,
      'unicorn/prefer-query-selector': 2,
      'unicorn/prefer-spread': 2,
      'unicorn/prefer-string-replace-all': 2,
      'unicorn/prefer-top-level-await': 2,
      'unicorn/prefer-type-error': 2,
      'unicorn/throw-new-error': 2,

      // promise rules
      ...promise.configs.recommended.rules,
      'promise/always-return': 2,
      'promise/avoid-new': 1,
      'promise/catch-or-return': 2,
      'promise/no-callback-in-promise': 1,
      'promise/no-native': 0,
      'promise/no-nesting': 1,
      'promise/no-new-statics': 2,
      'promise/no-promise-in-callback': 1,
      'promise/no-return-in-finally': 1,
      'promise/no-return-wrap': 2,
      'promise/param-names': 2,
      'promise/valid-params': 1,

      // fp rules - strategic FP.
      ...functional.configs['external-recommended'].rules,
      ...functional.configs.lite.rules,
      'functional/functional-parameters': 1,
      'functional/no-conditional-statement': 1,
      'functional/no-try-statement': 2,
      // Too much syntax noise, use an immutable lib if needed.
      'functional/prefer-readonly-type': 0,
      'functional/immutable-data': 1,

      // import rules for all js/ts
      ...imprt.configs.recommended.rules,
      'import/export': 2, // TypeScript compilation already ensures
      'import/named': 2, // TypeScript compilation already ensures that named imports exist in the referenced module
      'import/namespace': 2, // TypeScript compilation already ensures
      'import/default': 2, // TypeScript compilation already ensures
      'import/no-named-as-default-member': 1,
      'import/no-unresolved': [2, { commonjs: true }], // required by eslint-import-resolver-typescript.
      'import/no-unused-modules': [
        2,
        {
          missingExports: true,
          unusedExports: true,
          // ignoreExports: '**/*(rc,.config).{cjs,mjs,js,ts,jsx,tsx}',
        },
      ],
      'import/no-useless-path-segments': [2, { noUselessIndex: true }],
      'import/max-dependencies': [
        1,
        {
          max: 8,
          ignoreTypeImports: true,
        },
      ],
    },
  },

  // base config and rules only for TS files
  {
    files: [TS_GLOBS, TSX_GLOBS],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    plugins: {
      functional,
      import: imprt,
      '@typescript-eslint': ts,
      ts,
    },

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.ts', '.tsx', '.mjs'],
        },
      },
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/extensions': ['.ts', '.tsx', '.mjs'],
    },

    rules: {
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs['recommended'].rules,

      'ts/ban-ts-comment': 1,

      'no-undef': 0, // typescript already takes care of this
      'no-dupe-class-members': 0, // typescript already takes care of this
      'no-return-await': 0, // use @typescript/eslint
      'no-throw-literal': 0, // use @typescript/eslint
      'no-use-before-define': 0, // use @typescript/eslint
      'no-unused-expressions': 0, // use @typescript/eslint
      'no-empty-function': 0, // use @typescript/eslint
      'require-await': 0, // use @typescript/eslint
      'no-unused-vars': 0, // use @typescript/eslint
      'dot-notation': 0, // use @typescript/eslint
      'no-shadow': 0, // use @typescript/eslint

      'ts/return-await': 2,
      'ts/no-throw-literal': 2,
      'ts/no-use-before-define': 2,
      'ts/consistent-type-assertions': 2,
      'ts/consistent-type-imports': [2, { prefer: 'type-imports', disallowTypeAnnotations: true }],
      'ts/explicit-module-boundary-types': 2,
      'ts/no-invalid-void-type': 2,
      'ts/no-unnecessary-condition': 2,
      'ts/no-unused-expressions': [
        2,
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
          enforceForJSX: true,
        },
      ],
      'ts/no-array-constructor': 0,
      'ts/array-type': 2,
      'ts/no-empty-function': 2,
      'ts/prefer-optional-chain': 2,
      'ts/dot-notation': 2,
      'ts/no-unsafe-assignment': 0,
      'ts/no-shadow': [
        2,
        {
          hoist: 'all',
          allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
          ignoreTypeValueShadow: true,
          ignoreFunctionTypeParameterNameValueShadow: true,
        },
      ],

      // Too much syntax noise, use an immutable lib if needed.
      'ts/prefer-readonly-parameter-types': 0,

      // Enable the FP rules that require TS.
      'functional/no-expression-statement': [2, { ignoreVoid: true }],
      'functional/no-return-void': 2,
      'functional/no-method-signature': 2,
      'functional/no-mixed-type': 2,
      'functional/prefer-tacit': 2,

      // Import rules for import
      ...imprt.configs.typescript.rules,
      'import/export': 0, // TypeScript compilation already ensures
      'import/named': 0, // TypeScript compilation already ensures that named imports exist in the referenced module
      'import/namespace': 0, // TypeScript compilation already ensures
      'import/default': 0, // TypeScript compilation already ensures
      'import/no-named-as-default-member': 1,
      'import/no-unresolved': [2, { commonjs: true }], // required by eslint-import-resolver-typescript.
    },
  },
];

// style, fmt, and controls - heavy weight, apply last
const summitConfig = [
  {
    linterOptions: { noInlineConfig: false },
    plugins: {
      comments,
      functional,
      import: imprt,
    },
    rules: {
      // Require a short note when allowing inline config such as disabling a rule.
      'comments/require-description': 2,
      'comments/disable-enable-pair': 2,
      'comments/no-aggregating-enable': 2,
      'comments/no-duplicate-disable': 2,
      'comments/no-unlimited-disable': 2,
      'comments/no-unused-enable': 2,

      // Function hoisting for readability
      'no-use-before-define': [2, { functions: false, classes: true, variables: true }],
      ...functional.configs.stylistic.rules,

      // Import styling
      'import/first': 1,
      'import/exports-last': 0, // only works on es6 exports
      'import/no-duplicates': 2,

      'import/no-namespace': 1,
      'import/extensions': [1, 'never'],
      'import/order': [
        2,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],
      // considerComments is not release yet.
      // 'import/newline-after-import': [1, { considerComments: true }],
      'import/newline-after-import': 1,

      'import/prefer-default-export': 0,
      'import/no-default-export': 1,
      'import/no-anonymous-default-export': 2,
      'import/no-unassigned-import': 2,
      'import/no-named-as-default': 1,
      'import/no-named-export': 0,
    },
  },

  // TS & ES6 Modules overrides
  {
    files: [TS_GLOBS, '**/?(*.md/)*.mjs'],
    plugins: { import: imprt },
    rules: {
      'import/exports-last': 1,
      // not released yet
      // 'import/consistent-type-specifier-style': 1,
    },
  },

  // config file overrides
  {
    files: [CONFIGS_GLOBS],
    plugins: {
      functional,
      import: imprt,
    },
    rules: {
      'import/no-default-export': 0,
      'functional/no-expression-statement': 0,
      'functional/immutable-data': 0,
    },
  },
  {
    files: [YML_GLOBS],
    plugins: { yml },
    languageOptions: { parser: 'yaml-eslint-parser' },
    rules: { ...yml.configs.prettier.rules },
  },

  {
    files: [JSON_GLOB, JSONC_GLOB, JSON5_GLOB],
    ignores: ['package.json'],
    plugins: [jsonc],
    languageOptions: { parser: jsonc },
    rules: { ...jsonc.configs.prettier.rules },
  },
  {
    plugins: { editorconfig },
    rules: { ...editorconfig.configs.all.rules },
  },
  prettierConfig,
];

// heavy, selective application such as only in CI or on prepush hook
const heavyConfig = [
  {
    files: [TS_GLOBS, JS_GLOBS],
    // works best with TS but does have to have it.
    plugins: { sonarjs },
    rules: {
      ...sonarjs.configs.recommended.rules,
      'sonarjs/cognitive-complexity': 0,
      'sonarjs/prefer-immediate-return': 0,
    },
  },
  {
    files: [TSX_GLOBS, TS_GLOBS],
    plugins: { ts },
    rules: {
      ...ts.configs['recommended-requiring-type-checking'].rules,
    },
  },
];

// Jest configuration
const testConfig = [
  {
    files: [JEST_GLOBS],
    settings: {
      jest: true,
      node: true,
      browser: true,
    },
    plugins: { testLib, jest, jestFmt },
    rules: {
      ...testLib.configs.react.rules,
      ...jest.configs.recommended.rules,
      ...jest.configs.style.rules,
      ...jestFmt.configs.strict.rules,
    },
  },
  {
    // or whatever matches stories specified in .storybook/main.js
    files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    plugins: { sb },
    rules: {
      ...sb.configs.recommended.rules,
      ...sb.configs.csf.rules,
      ...sb.configs['csf-strict'].rules,
    },
  },
];

// NodeJS additions
const nodejsConfig = [
  {
    // some of this might not apply to jsx/tsx
    files: [TS_GLOBS],
    settings: { node: true },
    plugins: {
      n,
      security,
      import: imprt,
    },
    rules: {
      ...n.configs.recommended.rules,
      ...security.configs.recommended.rules,
      'n/no-unsupported-features/es-syntax': [2, { ignores: ['modules'] }],
      'n/no-unsupported-features/node-builtins': 0,
      'n/no-missing-import': 2,
      'no-path-concat': 2,
      'no-process-exit': 2,
      'no-sync': 1,
      'import/no-nodejs-modules': 0,
    },
  },
  {
    files: [TS_GLOBS],
    plugins: { n },
    rules: {
      'n/no-missing-import': 0, // Typescript has this covered.
    },
  },
];

const reactjsConfig = [
  {
    files: [REACTJS_GLOBS],
    plugins: { react },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true, jsx: true },
        project: './tsconfig.json',
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
        jsxPragma: null,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      node: true,
      browser: 'true',
    },

    rules: {
      ...react.configs.recommended.rules,
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
      ...react.configs['jsx-runtime'].rules,
      'react/prop-types': 0,
      'react/no-unstable-nested-components': [2, { allowAsProps: false }],
      'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
      'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
      'react/jsx-boolean-value': 2,
      'react/jsx-fragments': 2,
      'react/destructuring-assignment': 2,
      'react/no-multi-comp': 2,
      'react/no-array-index-key': 2,
      'react/jsx-props-no-spreading': 0,
      'react/jsx-sort-props': [
        2,
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          ignoreCase: true,
          noSortAlphabetically: true,
          multiline: 'last',
          reservedFirst: true,
        },
      ],
    },
  },
  {
    files: [REACTJS_GLOBS],
    plugins: {
      jsxa11y,
      reactHooks,
    },
    rules: [
      //...jsxa11y.configs.recommended.rules,
      //   ...reactHooks.configs.recommended.rules,
    ],
  },
];

const nextjsConfig = [
  {
    files: [`apps/${TS_GLOBS}`, `apps/${TSX_GLOBS}`],
    settings: {
      next: {
        rootDir: 'apps/*/',
      },
    },

    plugins: {
      '@next/next': nextjs,
    },
    rules: {
      ...nextjs.configs.recommended.rules,
      ...nextjs.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 0,
      'react/jsx-key': 0,
    },
  },
];

export default [
  {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: true,
    },
  },
  ...baseConfig,
  // ...nodejsConfig,
  // ...reactjsConfig,
  // ...nextjsConfig,
  // ...testConfig,
  // ...(IS_HEAVY ? heavyConfig : []),
  // ...summitConfig,
  ...cfgConfig,

  {
    ignores: [
      'eslint.config.js',
      '**/node_modules',
      '.pnp',
      '.pnp.js',
      '__package_previews__',
      '.store',
      '**/coverage',
      '.next/',
      '**/out/',
      '**/build',
      '.DS_Store',
      '*.pem',
      'npm-debug.log',
      'yarn-debug.log',
      'yarn-error.log',
      '.pnpm-debug.log',
      'build-storybook.log',
      '.env.local',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',
      '.turbo',
      '.jest-cache',
      '.eslintcache',
      '.parcel-cache',
      'yarn.lock',
      'package-lock.json',
      '.moon/cache',
      '.moon/docker',
      '.gitleaks.toml',
      '.gitattributes',
      '**/vendored',
      '*.hbs',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '.pnpm-debug.log*',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
      '**/storybook-static',
    ],
  },
];
