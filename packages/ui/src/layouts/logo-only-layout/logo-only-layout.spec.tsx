import { render, screen } from '@testing-library/react';

import { LogoOnlyLayout } from './logo-only-layout';

describe('LogoOnlyLayout', () => {
  it('renders children', () => {
    const childText = 'LogoOnlyLayout';
    render(<LogoOnlyLayout>{childText}</LogoOnlyLayout>);

    expect(screen.getByText(childText)).toBeDefined();
  });
});
