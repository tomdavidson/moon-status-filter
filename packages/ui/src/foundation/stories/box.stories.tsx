import { Button, Box, Typography } from 'foundation';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <>
    <Typography gutterBottom>Convenience wrapper around a div for CSS</Typography>
    <Box {...args} />
    <Button sx={{ marginTop: 4 }} href="https://mui.com/material-ui/api/box" target="_blank">
      See MUI Source Docs
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  sx: {
    width: 300,
    height: 300,
    backgroundColor: 'primary.dark',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  },
};
