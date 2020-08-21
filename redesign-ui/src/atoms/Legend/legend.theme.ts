import { LegendInterface } from './legend.types';

export function legendTheme({ theme: { border } }: LegendInterface) {
  return {
    borderBottom: border.thin,
  };
}
