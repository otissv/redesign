import { isFunction } from '@redesign-system/theme'
import { FieldsetInterface } from './fieldset.types'

export function fieldsetTheme(props: FieldsetInterface) {
  const {
    theme: { font, unit, Fieldset },
  } = props

  return {
    position: 'relative',
    border: 'none',
    margin: '0',
    padding: '0',

    legend: {
      fontWeight: font.weight[4],
      width: '100%',
      marginBottom: unit[3],
      paddingBottom: unit[2],
    },

    ...(isFunction(Fieldset) ? Fieldset(props)?.default : Fieldset?.default),
  }
}
