import React, { FunctionComponent, useMemo } from 'react'
import { Base, useTheme } from '@redesign/ui-core'

import { JsonInterface } from './json.types'
import { jsonTheme } from './json.theme'

export const Json: FunctionComponent<JsonInterface> = function JsonView({
  as = 'pre',
  className = '',
  css = '',
  data,
  ...propsRest
}: any) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Json ${className}`, [className])
  const cssList: any = useMemo(() => [jsonTheme, css], [jsonTheme, css])

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      theme={theme}
      {...propsRest}
    >
      <code className="language-javascript">
        {JSON.stringify(data, null, 2)}
      </code>
    </Base>
  )
}

Json.displayName = 'Json'
