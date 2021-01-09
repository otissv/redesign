import React, { FC } from 'react'
import { isString, SECONDARY_ERROR } from '@redesign-system/theme'

import { FormCheckboxInterface } from './formCheckbox.types'

import { Base, useTheme } from '@redesign-system/ui-core'
import { Maybe } from '../Maybe'
import { Either } from '../Either'
import { Checkbox } from '../Checkbox'
import { ErrorMessage, ErrorMessageInterface } from '../ErrorMessage'
import { Label, LabelInterface } from '../Label'
import { formCheckboxTheme } from './formCheckbox.theme'

interface HelpMessageInterface {
  required?: boolean
}

function HelpMessage({ children }: any) {
  return <p>{children}</p>
}

export const FormCheckbox: FC<FormCheckboxInterface> = function FormCheckbox({
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
  checked = false,
  onChange,
  onFocus,
  onBlur,
  appearance,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `FormCheckbox ${className}`
  const cssList = [formCheckboxTheme, css]

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
              <Checkbox
                placeholder={placeholder}
                required={required}
                checked={checked}
                invalid={invalid}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...control}
                id={id}
                label={label as string}
                appearance={invalid ? SECONDARY_ERROR : control?.appearance}
              />{' '}
              {label}
              {children}
            </Label>
            <Label {...(label as LabelInterface)} htmlFor={id}>
              <Checkbox
                placeholder={placeholder}
                required={required}
                checked={checked}
                invalid={invalid}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...control}
                id={id}
                label={label as string}
                appearance={invalid ? SECONDARY_ERROR : control?.appearance}
              />{' '}
              {(label as LabelInterface)?.children}
              {children}
            </Label>
          </Either>
        </Maybe>

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
