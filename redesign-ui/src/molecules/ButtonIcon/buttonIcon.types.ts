import { ButtonInterface } from '../../atoms/Button'
import { IconInterface } from '../../atoms/Icon'

export interface ButtonIconInterface extends ButtonInterface {
  alt: string
  dimension?: string
  icon: (props: IconInterface) => React.ReactNode
  iconProps?: IconInterface
  title?: string
  uid?: string
}
