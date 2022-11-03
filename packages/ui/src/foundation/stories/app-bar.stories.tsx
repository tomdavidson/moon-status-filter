import { AppBar, Toolbar, IconButton, Button, Typography } from 'foundation';
import { Menu as MenuIcon } from 'foundation/icons';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/AppBar',
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

export const Basic: ComponentStory<typeof AppBar> = () => (
  <>
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Button color="inherit">Sign up</Button>
        <Button variant="outlined" color="inherit" sx={{ borderColor: '#fff', ml: 2 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
    <Toolbar />
    <Button href="https://mui.com/material-ui/api/app-bar/" target="_blank">
      See MUI Source Docs
    </Button>
  </>
);
