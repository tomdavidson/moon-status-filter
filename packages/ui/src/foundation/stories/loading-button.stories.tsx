import { Button, LoadingButton, Flex } from 'foundation';
import { Send, Save } from 'foundation/icons';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Inputs/Buttons/LoadingButton',
  component: LoadingButton,
  argTypes: {
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof LoadingButton>;

export const Default: ComponentStory<typeof LoadingButton> = (args) => (
  <Flex spacing={2} alignItems="flex-start">
    <Flex spacing={2} direction="row" alignItems="flex-start">
      <LoadingButton {...args} variant="outlined" disabled>
        disabled
      </LoadingButton>
      <LoadingButton {...args} loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton {...args} endIcon={<Send />} loadingPosition="end" variant="contained">
        Send
      </LoadingButton>
      <LoadingButton color="secondary" {...args} loadingPosition="start" startIcon={<Save />} variant="contained">
        Save
      </LoadingButton>
    </Flex>
    <Button href="https://mui.com/material-ui/api/loading-button" target="_blank">
      See MUI Source Docs
    </Button>
  </Flex>
);
