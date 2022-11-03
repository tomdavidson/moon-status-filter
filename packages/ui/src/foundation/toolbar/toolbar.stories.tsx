import { Toolbar } from './toolbar';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Toolbar',
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
