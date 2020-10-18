import { isFunction } from '@redesign/theme'
import { FormTextBoxInterface } from './formTextbox.types'

export function formTextboxTheme(props: FormTextBoxInterface) {

  const {
    theme: { FormTextBox },
  } =props
  
  return {
    position: 'relative',
    ...(isFunction(FormTextBox)
      ? FormTextBox(props)?.default
      : FormTextBox?.default),
  }
}
