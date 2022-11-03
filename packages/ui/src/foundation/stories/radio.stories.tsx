import { Button, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from 'foundation';

import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Inputs/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

export const Group = () => (
  <>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <Button sx={{ marginTop: 4 }} href="https://mui.com/material-ui/api/radio-group" target="_blank">
      See MUI Source Docs
    </Button>
  </>
);
