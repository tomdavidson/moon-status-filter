import { Avatar, AvatarGroup } from 'foundation';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Avatar/Group',
  component: AvatarGroup,
} as ComponentMeta<typeof AvatarGroup>;

const srcs = Array(20)
  .fill(1)
  .map((_, i) => `https://i.pravatar.cc/150?img=${i + 1}`);
console.log(srcs);
export const Max: ComponentStory<typeof AvatarGroup> = (args) => (
  <AvatarGroup {...args} max={3}>
    {srcs.map((src) => (
      <Avatar src={src} />
    ))}
  </AvatarGroup>
);

export const Total: ComponentStory<typeof AvatarGroup> = (args) => (
  <AvatarGroup {...args} total={srcs.length}>
    {srcs.slice(0, 3).map((src) => (
      <Avatar src={src} />
    ))}
  </AvatarGroup>
);
