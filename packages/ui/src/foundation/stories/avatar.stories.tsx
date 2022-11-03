import { Avatar, Flex, Button, Typography } from 'foundation';
import { Home } from 'foundation/icons';

import type { ComponentStory, ComponentMeta } from '@storybook/react';
import type { FC } from 'react';
import type { ReactNode } from 'react';

export default {
  title: 'Foundation/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: 'text',
      defaultValue: 'https://i.pravatar.cc/150?img=68',
    },
    alt: {
      control: 'text',
      defaultValue: 'Aaron Jeger',
    },
  },
} as ComponentMeta<typeof Avatar>;
const DocLink = () => (
  <Button href="https://mui.com/material-ui/api/avatar" target="_blank">
    See MUI Source Docs
  </Button>
);
const Template: FC<{ children: ReactNode }> = ({ children }) => (
  <Flex spacing={3} alignItems="flex-start">
    {children}
    <DocLink />
  </Flex>
);

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Template>
    <Avatar {...args} />
  </Template>
);

export const Sizes: ComponentStory<typeof Avatar> = (args) => (
  <Template>
    <Flex spacing={2} direction="row" alignItems="baseline">
      <Avatar {...args} sx={{ width: 24, height: 24 }} />
      <Avatar {...args} />
      <Avatar {...args} sx={{ width: 56, height: 56 }} />
    </Flex>
  </Template>
);

export const Fallbacks: ComponentStory<typeof Avatar> = (args) => (
  <Template>
    <Flex spacing={1}>
      <Typography variant="subtitle1">To Child</Typography>
      <Avatar {...args} src="https://bad.test/url">
        <Home />
      </Avatar>
    </Flex>
    <Flex spacing={1}>
      <Typography variant="subtitle1">To First Letter of Alt Text</Typography>
      <Avatar {...args} src="https://bad.test/url" />
    </Flex>
    <Flex spacing={1}>
      <Typography variant="subtitle1">Generic Avatar Icon</Typography>
      <Avatar {...args} src="https://bad.test/url" alt="" />
    </Flex>
  </Template>
);
