import { Box, Button, Flex, Typography } from 'foundation';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Layout/Flex',
  component: Flex,
  argTypes: {
    direction: {
      options: ['column-reverse', 'column', 'row-reverse', 'row'],
      control: 'select',
    },
    spacing: {
      control: 'number',
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Box width="100%" height="100%">
    <Typography gutterBottom>
      Convenience wrapper for a `div` with <code>display:flex</code>{' '}
    </Typography>
    <Flex {...args}>
      {[1, 2, 3, 4].map((n) => (
        <Box key={n} width={n * 50} height={n * 50} bgcolor="pink">
          <Typography variant="h6">{n}</Typography>
        </Box>
      ))}
    </Flex>
    <Button sx={{ marginTop: 4 }} href="https://mui.com/material-ui/api/stack" target="_blank">
      See MUI Source Docs
    </Button>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  spacing: 2,
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};
