import ThemeProvider from '../src/theme';

const MUIDecorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

export const decorators = [MUIDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
