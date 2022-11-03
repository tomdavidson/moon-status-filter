import { Button, IconButton, Flex } from 'foundation';
import { Delete, Alarm, AddShoppingCart, Fingerprint } from 'foundation/icons';

import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Inputs/Buttons/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const DocLink = () => (
  <Button href="https://mui.com/material-ui/api/icon-button/" target="_blank">
    See MUI Source Docs
  </Button>
);

export const Basics = () => (
  <Flex spacing={2} alignItems="flex-start">
    <Flex spacing={2} direction="row" alignItems="flex-start">
      <IconButton aria-label="delete">
        <Delete />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <Delete />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <Alarm />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCart />
      </IconButton>
    </Flex>
    <DocLink />
  </Flex>
);

export const Size = () => (
  <Flex spacing={2} alignItems="flex-start">
    <Flex spacing={2} direction="row" alignItems="baseline">
      <IconButton aria-label="delete" size="small">
        <Delete fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <Delete fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <Delete />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <Delete fontSize="inherit" />
      </IconButton>
    </Flex>
    <DocLink />
  </Flex>
);

export const Color = () => (
  <Flex spacing={2} alignItems="flex-start">
    <Flex spacing={2} direction="row" alignItems="baseline">
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Flex>
    <DocLink />
  </Flex>
);
