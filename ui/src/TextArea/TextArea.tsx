import React, { FC } from 'react'

import { Textbox } from '../Textbox'
import { TextAreaInterface } from './textArea.types'

import { textAreaTheme } from './textArea.theme'

export const TextArea: FC<TextAreaInterface> = function Textarea({
  as = 'textarea',
  className = '',
  css = '',
  ...propsRest
}) {
  const classNames = `TextArea ${className}`
  const cssList = [textAreaTheme, css]

  return <Textbox as={as} className={classNames} css={cssList} {...propsRest} />
}

TextArea.displayName = 'TextArea'
