import { isFunction } from '@redesign-system/theme'
import { FormCheckboxInterface } from './formCheckbox.types'

export function formCheckboxTheme(props: FormCheckboxInterface) {
  const {
    theme: { FormCheckbox },
  } = props

  return {
    position: 'relative',
    ...(isFunction(FormCheckbox)
      ? FormCheckbox(props)?.default
      : FormCheckbox?.default),
  }
}
