import { FieldsetInterface } from './fieldset.types';

export function fieldsetTheme({ theme: { font, unit } }: FieldsetInterface) {
  return {
    border: 'none',
    margin: '0',
    padding: '0',

    legend: {
      fontWeight: font.weight[4],
      width: '100%',
      marginBottom: unit[3],
      paddingBottom: unit[2],
    },
  };
}
