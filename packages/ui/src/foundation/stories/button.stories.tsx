import { Button, ButtonProps, Box, Flex, Typography } from 'foundation';
import { Delete, Send } from 'foundation/icons';

import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Inputs/Buttons/Basic',
  component: Button,
} as ComponentMeta<typeof Button>;

const VariantTemplate = (props: ButtonProps) => (
  <Flex spacing={3} direction="row">
    <Button {...props} variant="contained">
      Contained
    </Button>
    <Button {...props} variant="outlined">
      Outlined
    </Button>
    <Button {...props} variant="text">
      Text
    </Button>
  </Flex>
);

const SizeTemplate = (props: ButtonProps) => (
  <Flex spacing={3} direction="row">
    <Button {...props} size="small">
      Small
    </Button>
    <Button {...props} size="medium">
      Medium
    </Button>
    <Button {...props} size="large">
      Large
    </Button>
  </Flex>
);

const ColorTemplate = (props: ButtonProps) => (
  <Flex spacing={3} direction="row">
    <Button {...props} color="primary">
      Primary
    </Button>
    <Button {...props} color="secondary">
      Secondary
    </Button>
    <Button {...props} color="success">
      Success
    </Button>
    <Button {...props} color="error">
      Error
    </Button>
    <Button {...props} color="warning">
      Warning
    </Button>
    <Button {...props} color="info">
      Info
    </Button>
    <Button {...props} color="inherit">
      Inherit
    </Button>
  </Flex>
);

const DocLink = () => (
  <Button href="https://mui.com/material-ui/api/button/" target="_blank">
    See MUI Source Docs
  </Button>
);

export const Variants = () => (
  <Flex spacing={2} alignItems="flex-start">
    <Box>
      <Typography variant="subtitle1">Variants</Typography>
      <VariantTemplate />
    </Box>

    <Box>
      <Typography variant="subtitle1">Disabled</Typography>
      <VariantTemplate disabled />
    </Box>

    <DocLink />
  </Flex>
);

export const Size = () => (
  <Flex spacing={2} alignItems="flex-start">
    <Typography variant="subtitle1">Size</Typography>
    <SizeTemplate variant="contained" />
    <SizeTemplate variant="outlined" />
    <SizeTemplate variant="text" />
    <DocLink />
  </Flex>
);

export const Color = () => (
  <Flex spacing={2} alignItems="flex-start">
    <Typography variant="subtitle1">Color</Typography>
    <ColorTemplate variant="contained" />
    <ColorTemplate variant="outlined" />
    <ColorTemplate variant="text" />
    <DocLink />
  </Flex>
);

export const AsLinks = () => (
  <Flex spacing={2} alignItems="flex-start">
    <Typography variant="subtitle1">As A Link</Typography>
    <VariantTemplate href="https://mui.com/material-ui/api/button/" target="_blank" />
    <DocLink />
  </Flex>
);

export const WithIcons = () => (
  <Flex spacing={2} alignItems="flex-start">
    <Button variant="outlined" startIcon={<Delete />}>
      Before
    </Button>
    <Button variant="contained" endIcon={<Send />}>
      After
    </Button>
    <DocLink />
  </Flex>
);
