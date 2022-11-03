import { FormControlLabel, FormGroup, Switch } from 'foundation';

import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Inputs/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const Basic = () => (
  <>
    <Switch {...label} defaultChecked />
    <Switch {...label} />
    <Switch {...label} disabled defaultChecked />
    <Switch {...label} disabled />
  </>
);

export const Label = () => (
  <FormGroup>
    <FormControlLabel control={<Switch defaultChecked />} label="Label" />
    <FormControlLabel disabled control={<Switch />} label="Disabled" />
  </FormGroup>
);
