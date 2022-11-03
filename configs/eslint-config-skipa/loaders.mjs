// @ts-nocheck
import fs from 'node:fs';
import path from 'node:path';
import { env } from 'node:process';
import { fileURLToPath } from 'url';

import { globbySync } from 'globby';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ignores = () => {
  const readIgnoreFile = (file) =>
    fs
      .readFileSync(file, { encoding: 'utf8', flag: 'r' })
      .replace(/\#.*\n+/g, '') // strip comments
      .split(/\n+|\r+/); // split on multiples to remove blank lines

  return [
    ...new Set(
      globbySync(['.*ignore', '**/.*ignore'], { gitignore: true, expandDirectories: true }).reduce(
        (acc, curr) => [...acc, ...readIgnoreFile(curr)],
        []
      )
    ),
  ];
};

const configCatalog = () =>
  globbySync([path.resolve(__dirname, './configs/*.js')]).map((curr) => ({
    name: path.parse(curr).name,
    filePath: curr,
  }));

// order of returned configs is defined by the order of selectors rather than filtering the catalog.
const selectConfigs = (selectors) => {
  const selectorList = typeof selectors == 'string' ? [selection] : selectors;
  return selectorList
    .map((selection) => configCatalog().find((cfg) => selection == cfg.name))
    .map((cfg) => ({ ...cfg, config: require(cfg.filePath) }));
};

export { ignores, selectConfigs };
