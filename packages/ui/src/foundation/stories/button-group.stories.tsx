import { Button, ButtonGroup, Flex } from 'foundation';

import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Inputs/Buttons/Button Group',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Buttons = () => (
  <>
    <Button>First</Button>
    <Button>Second</Button>
    <Button>Third</Button>
  </>
);

const DocLink = () => (
  <Button href="https://mui.com/material-ui/api/button-group/" target="_blank">
    See MUI Source Docs
  </Button>
);

export const Variants = () => (
  <Flex spacing={2} alignItems="flex-start">
    <ButtonGroup variant="contained">
      <Buttons />
    </ButtonGroup>
    <ButtonGroup variant="outlined">
      <Buttons />
    </ButtonGroup>
    <ButtonGroup variant="text">
      <Buttons />
    </ButtonGroup>
    <DocLink />
  </Flex>
);

export const Size = () => (
  <Flex spacing={2} alignItems="flex-start">
    <ButtonGroup size="small">
      <Buttons />
    </ButtonGroup>
    <ButtonGroup size="medium">
      <Buttons />
    </ButtonGroup>
    <ButtonGroup size="large">
      <Buttons />
    </ButtonGroup>
    <DocLink />
  </Flex>
);

export const Vertical = () => (
  <Flex spacing={2} alignItems="flex-start">
    <Flex spacing={2} direction="row" alignItems="flex-start">
      <ButtonGroup orientation="vertical" variant="contained">
        <Buttons />
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="outlined">
        <Buttons />
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="text">
        <Buttons />
      </ButtonGroup>
    </Flex>
    <DocLink />
  </Flex>
);
