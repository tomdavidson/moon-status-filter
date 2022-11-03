import { LogoOnlyLayout } from './logo-only-layout';
import { Box, Flex } from 'foundation';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Layouts/Logo Only',
  component: LogoOnlyLayout,
} as ComponentMeta<typeof LogoOnlyLayout>;

const Template: ComponentStory<typeof LogoOnlyLayout> = (args) => (
  <LogoOnlyLayout {...args}>
    <Flex alignItems="center" justifyContent="center" sx={{ height: '80vh' }}>
      <Box sx={{ width: 250, height: 250, backgroundColor: 'pink' }} />
    </Flex>
  </LogoOnlyLayout>
);

export const Default = Template.bind({});
Default.args = {};
