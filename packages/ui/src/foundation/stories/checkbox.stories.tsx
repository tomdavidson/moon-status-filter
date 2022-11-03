import { Checkbox, Flex, FormControlLabel, FormGroup } from 'foundation';

import type { ComponentMeta } from '@storybook/react';
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from 'foundation/icons';

export default {
  title: 'Foundation/Inputs/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const Basic = () => (
  <Flex direction="row" spacing={1}>
    <Checkbox {...label} defaultChecked />
    <Checkbox {...label} />
    <Checkbox {...label} disabled />
    <Checkbox {...label} disabled checked />
  </Flex>
);

export const Labels = () => (
  <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
  </FormGroup>
);

export const Size = () => (
  <Flex direction="row" spacing={1}>
    <Checkbox {...label} defaultChecked size="small" />
    <Checkbox {...label} defaultChecked />
    <Checkbox {...label} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
  </Flex>
);

export const Color = () => (
  <Flex direction="row" spacing={1}>
    <Checkbox {...label} defaultChecked />
    <Checkbox {...label} defaultChecked color="secondary" />
    <Checkbox {...label} defaultChecked color="success" />
    <Checkbox {...label} defaultChecked color="default" />
    <Checkbox
      {...label}
      defaultChecked
      sx={{
        color: 'secondary.main',
        '&.Mui-checked': {
          color: 'secondary.lighter',
        },
      }}
    />
  </Flex>
);

export const Icons = () => (
  <Flex direction="row" spacing={1}>
    <Checkbox {...label} checked icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
    <Checkbox {...label} icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
  </Flex>
);
