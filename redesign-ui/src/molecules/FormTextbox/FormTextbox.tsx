import React, { FC, useMemo } from 'react'
import { isString, SECONDARY_ERROR } from '@redesign/theme'

import { FormTextBoxInterface } from './formTextbox.types'

import { Base, useTheme } from '@redesign/ui-core'
import { Maybe } from '../../helpers/Maybe'
import { Either } from '../../helpers/Either'
import { Textbox } from '../../atoms/Textbox'
import { ErrorMessage, ErrorMessageInterface } from '../../atoms/ErrorMessage'
import { Label, LabelInterface } from '../../atoms/Label'
import { formTextboxTheme } from './formTextboxField.theme'

interface HelpMessageInterface {
  required?: boolean
}

function HelpMessage({ children }: any) {
  return <p>{children}</p>
}

export const FormTextbox: FC<FormTextBoxInterface> = function FormTextbox({
  children,
  as = 'div',
  control,
  className = '',
  css = '',
  errorMessage = {},
  helpMessage,
  id,
  label,
  placeholder,
  required,
  value = '',
  appearance,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `FormTextbox ${className}`, [className])
  const cssList: any = useMemo(() => [formTextboxTheme, css], [
    formTextboxTheme,
    css,
  ])

  const invalid =
    (typeof errorMessage === 'string' && !!Boolean(errorMessage)) ||
    !!Boolean((errorMessage as Partial<ErrorMessageInterface>)?.children)

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      <Base theme={theme}>
        <Maybe check={Boolean(label)}>
          <Either check={isString(label)}>
            <Label htmlFor={id} required={required}>
              {label}
            </Label>
            <Label {...(label as LabelInterface)} htmlFor={id} />
          </Either>
        </Maybe>

        <Textbox
          placeholder={placeholder}
          required={required}
          value={value}
          id={id}
          invalid={invalid}
          {...control}
          appearance={invalid ? SECONDARY_ERROR : control?.appearance}
        />

        {children}

        <Maybe check={invalid}>
          <Either check={isString(errorMessage)}>
            <ErrorMessage required={required}>{errorMessage}</ErrorMessage>
            <ErrorMessage
              {...(errorMessage as ErrorMessageInterface)}
              required={required}
            />
          </Either>
        </Maybe>
      </Base>

      <Maybe check={Boolean(helpMessage)}>
        <Either check={isString(helpMessage)}>
          <HelpMessage required={required}>{helpMessage}</HelpMessage>
          <HelpMessage
            {...(helpMessage as HelpMessageInterface)}
            required={required}
          />
        </Either>
      </Maybe>
    </Base>
  )
}
