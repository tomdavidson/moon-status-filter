import { Flex, TextField, Button } from 'foundation';

import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Inputs/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Variants = () => (
  <>
    <Flex direction="row" spacing={2} alignItems="flex-end">
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
    </Flex>
    <Button sx={{ marginTop: 4 }} href="https://mui.com/material-ui/api/text-field" target="_blank">
      See MUI Source Docs
    </Button>
  </>
);
