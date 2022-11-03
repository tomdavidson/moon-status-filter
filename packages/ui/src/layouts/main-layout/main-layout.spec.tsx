import mediaQuery from 'css-mediaquery';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import breakpoints from 'theme/breakpoints';
import { Box } from 'foundation';
import { MainLayout } from './main-layout';
import ThemeProvider from 'theme';

console.log(breakpoints);
const createMatchMedia = (width: string) => (query: string) => ({
  matches: mediaQuery.match(query, {
    width,
  }),
  addListener: () => {},
  removeListener: () => {},
});

const navMenuText = 'nav menu';
const childText = 'child';

function Template() {
  return (
    <ThemeProvider>
      <MainLayout navMenu={<Box>{navMenuText}</Box>}>
        <Box>{childText}</Box>
      </MainLayout>
    </ThemeProvider>
  );
}

describe('MainLayout', () => {
  it('has the AppBar', () => {
    render(<Template />);

    expect(screen.getByTestId('appbar')).toBeDefined();
  });

  it('renders the children', () => {
    render(<Template />);

    expect(screen.getByText(childText)).toBeDefined();
  });

  describe('Desktop', () => {
    beforeEach(() => {
      window.matchMedia = createMatchMedia(`${breakpoints.values.lg}px`);
    });

    it('has the nav drawer showing', () => {
      render(<Template />);

      expect(screen.getByTestId('navdrawer')).toBeDefined();
    });

    it('renders the nav menu', () => {
      render(<Template />);

      expect(screen.getByText(navMenuText)).toBeDefined();
    });
  });

  describe('Mobile', () => {
    beforeEach(() => {
      window.matchMedia = createMatchMedia(`${breakpoints.values.md}px`);
    });

    it('has the nav drawer hidden', () => {
      render(<Template />);

      expect(screen.queryByTestId('navdrawer')).toBeNull();
    });

    it('renders the nav menu', async () => {
      render(<Template />);

      await userEvent.click(screen.getByRole('button'));

      expect(screen.getByText(navMenuText)).toBeDefined();
    });
  });
});
