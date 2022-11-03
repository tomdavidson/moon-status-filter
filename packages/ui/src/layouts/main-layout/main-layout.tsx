import { Menu as MenuIcon, MenuOpen as MenuOpenIcon } from 'foundation/icons';
import { useResponsive } from 'hooks';
import { AppBar, Toolbar, IconButton, Box, Flex, Drawer, Divider } from 'foundation';

import { FC, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  navMenu: ReactNode;
}
const drawWidth = '240px';

export const MainLayout: FC<Props> = ({ children, navMenu }) => {
  const isLarge = useResponsive({ query: 'up', key: 'lg' });
  const [isDrawerOpen, setDrawerState] = useState(false);

  return (
    <Flex>
      <AppBar
        data-testid="appbar"
        sx={{
          zIndex: (theme) => (isLarge ? theme.zIndex.drawer + 1 : theme.zIndex.appBar),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { lg: 'none' } }}
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon />
          </IconButton>
          Logo
        </Toolbar>
      </AppBar>
      <Drawer
        data-testid="navdrawer"
        variant={isLarge ? 'permanent' : 'temporary'}
        sx={{
          width: drawWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawWidth,
            FlexSizing: 'border-box',
          },
        }}
        open={isDrawerOpen}
        onClose={() => setDrawerState(false)}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            edge="start"
            sx={{ mr: 2, display: { lg: 'none' } }}
            onClick={() => setDrawerState(false)}
          >
            <MenuOpenIcon />
          </IconButton>
          Logo
        </Toolbar>
        <Divider />
        <nav>{navMenu}</nav>
      </Drawer>

      <Box
        sx={{
          position: 'relative',
          left: { lg: drawWidth },
          width: { lg: `calc(100% - ${drawWidth})`, xs: '100%' },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Flex>
  );
};
