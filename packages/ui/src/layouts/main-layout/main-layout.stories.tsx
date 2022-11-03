import { MainLayout } from './main-layout';
import { Box } from 'foundation';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Layouts/Main',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args}>
    <Box sx={{ width: '100%', height: '100vh', backgroundColor: 'pink' }} />
  </MainLayout>
);

export const Default = Template.bind({});
Default.args = {};
