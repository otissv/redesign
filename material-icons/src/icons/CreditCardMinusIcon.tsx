import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CreditCardMinusIcon: FC<IconInterface> = function CreditCardMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CreditCardMinusIcon ${className}`;
      return (
        <Icon alt="CreditCardMinus" className={classNames} {...propsRest}>
          <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H13V16H22V6A2 2 0 0 0 20 4M20 11H4V8H20M23 20H15V18H23Z" />

        </Icon>
      );
    };
    CreditCardMinusIcon.displayName = 'CreditCardMinusIcon';
      