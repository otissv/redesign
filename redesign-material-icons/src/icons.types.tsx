import { IconInterface } from './Icon'

export interface IconsInterface
  extends Pick<
    IconInterface,
    'appearance' | 'height' | 'hoverColor' | 'viewBox' | 'width' | 'title'
  > {
  [key: string]: any
}
