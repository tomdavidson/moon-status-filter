import { Container, AppBar, Toolbar, Typography } from 'foundation';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const LogoOnlyLayout: FC<Props> = ({ children }) => (
  <>
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <Typography color="black">Logo</Typography>
      </Toolbar>
    </AppBar>
    <Container>{children}</Container>
  </>
);
