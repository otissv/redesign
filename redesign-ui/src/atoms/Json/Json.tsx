import React, { FunctionComponent } from 'react'
import { JsonInterface } from './json.types'

export const Json: FunctionComponent<JsonInterface> = function JsonView({
  data,
}: any) {
  return (
    <pre>
      <code className="language-javascript">
        {JSON.stringify(data, null, 2)}
      </code>
    </pre>
  )
}

Json.displayName = 'Json'
