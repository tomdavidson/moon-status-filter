import { Flex, Paper, styled, Typography } from 'foundation';

import { useTheme } from 'hooks';

import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: theme.spacing(10),
  gridAutoRows: '75px',
  padding: theme.spacing(4),
}));

const colorShadows = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

export const SystemShadows = () => {
  const theme = useTheme();
  const shadows = Object.keys(theme.shadows);

  return (
    <Grid>
      {shadows.map((key) => (
        <Paper key={key} elevation={Number(key)}>
          <Flex alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
            <Typography variant="subtitle2">Elevation {key}</Typography>
          </Flex>
        </Paper>
      ))}
    </Grid>
  );
};
export const CustomShadows = () => {
  const theme = useTheme();
  const shadows = Object.keys(theme.customShadows).filter((key) => !colorShadows.includes(key));
  console.log(shadows);
  return (
    <Grid>
      {shadows.map((key) => (
        <Paper key={key} sx={{ boxShadow: theme.customShadows[key] }}>
          <Flex alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
            <Typography variant="subtitle2">Shadow {key}</Typography>
          </Flex>
        </Paper>
      ))}
    </Grid>
  );
};
export const ColorShadows = () => {
  const theme = useTheme();

  return (
    <Grid>
      {colorShadows.map((key) => (
        <Paper
          key={key}
          sx={{
            color: theme.palette[key].contrastText,
            bgcolor: theme.palette[key].main,
            boxShadow: theme.customShadows[key],
          }}
        >
          <Flex alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
            <Typography variant="subtitle2">Shadow {key}</Typography>
          </Flex>
        </Paper>
      ))}
    </Grid>
  );
};
