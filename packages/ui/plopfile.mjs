// import type { NodePlopAPI } from 'plop';

export default async function generators(/** @type {import('plop').NodePlopAPI} */ plop) {
  await plop.load('@skipa/plop-generators');
  await plop.load('./plop-files/mui.mjs');
}
