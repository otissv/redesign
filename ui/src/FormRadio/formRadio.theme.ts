import { isFunction } from '@redesign-system/theme'
import { FormRadioInterface } from './formRadio.types'

export function formRadioTheme(props: FormRadioInterface) {
  const {
    theme: { FormRadio },
  } = props

  return {
    position: 'relative',
    ...(isFunction(FormRadio) ? FormRadio(props)?.default : FormRadio?.default),
  }
}
