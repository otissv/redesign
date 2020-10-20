import { UtilityInterface } from '@redesign-system/theme'

import { BaseInterface } from '../Base'
import { getAlias } from './getAlias'

export const utilityStyles = (props: BaseInterface) => {
  const initialTheme: Partial<BaseInterface> = {}
  const reducer = (previous: any, key: any) => {
    const propKey = getAlias(key) as keyof UtilityInterface
    const prop = props[key]

    const utility =
      (props.theme as any).utility || ({} as Partial<UtilityInterface>)
    const utilityFn = utility[propKey]

    return prop && utilityFn
      ? {
          ...previous,
          ...utilityFn(prop),
        }
      : previous
  }

  return props.theme
    ? Object.keys(props).reduce(reducer, initialTheme)
    : initialTheme
}
