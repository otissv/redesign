import { toUpperFirst } from '@redesign/theme';

export function getBorder(
  border: { [key: string]: string },
  appearance?: string
) {
  if (appearance && appearance !== 'PRIMARY') {
    return border[`thick${toUpperFirst(appearance.toLowerCase())}`];
  }

  return border.thick;
}
