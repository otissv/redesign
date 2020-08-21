import React, { FC } from 'react'

import { Textbox } from '../Textbox'
import { TextareaInterface } from './textarea.types'

export const Textarea: FC<TextareaInterface> = function Textarea({
  as = 'textarea',
  ...propsRest
}) {
  return <Textbox as={as} {...propsRest} />
}

Textarea.displayName = 'Textarea'
