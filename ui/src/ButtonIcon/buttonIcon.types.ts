import { ButtonInterface } from '../Button'
import { IconInterface } from '../Icon'

export interface ButtonIconInterface extends ButtonInterface {
  alt: string
  dimension?: string
  icon: (props: IconInterface) => React.ReactNode
  iconProps?: IconInterface
  title?: string
  uid?: string
}
