import { useMediaQuery } from '@mui/material';
import type { Breakpoint, Theme } from '@mui/material';

type Key = Breakpoint | number;
type BoundQuery = {
  query: 'up' | 'down';
  key: Key;
  start?: never;
  end?: never;
};
type RangeQuery = { query: 'between'; start: Key; end: Key; key?: never };
type ExactQuery = {
  query: 'only' | 'not';
  key: Breakpoint;
  start?: never;
  end?: never;
};
type Query = BoundQuery | RangeQuery | ExactQuery;

export const useResponsive = ({ query, key, start, end }: Query) =>
  useMediaQuery((theme: Theme) => {
    switch (query) {
      case 'up':
        return theme.breakpoints.up(key);
      case 'down':
        return theme.breakpoints.down(key);
      case 'between':
        return theme.breakpoints.between(start, end);
      case 'only':
        return theme.breakpoints.only(key);
      case 'not':
        return theme.breakpoints.not(key);
    }
  });
