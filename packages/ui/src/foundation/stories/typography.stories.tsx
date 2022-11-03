import { Button, Typography } from 'foundation';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = () => (
  <div>
    <Typography variant="h1" gutterBottom>
      h1. Heading
    </Typography>
    <Typography variant="h2" gutterBottom>
      h2. Heading
    </Typography>
    <Typography variant="h3" gutterBottom>
      h3. Heading
    </Typography>
    <Typography variant="h4" gutterBottom>
      h4. Heading
    </Typography>
    <Typography variant="h5" gutterBottom>
      h5. Heading
    </Typography>
    <Typography variant="h6" gutterBottom>
      h6. Heading
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="subtitle2" gutterBottom>
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="button" display="block" gutterBottom>
      Button Text
    </Typography>
    <Typography variant="caption" display="block" gutterBottom>
      Caption Text
    </Typography>
    <Typography mb={6} variant="overline" display="block">
      Overline Text
    </Typography>

    <Button sx={{ marginTop: 4 }} href="https://mui.com/material-ui/api/typography" target="_blank">
      See MUI Source Docs
    </Button>
  </div>
);
