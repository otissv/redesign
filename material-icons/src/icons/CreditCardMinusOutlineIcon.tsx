import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CreditCardMinusOutlineIcon: FC<IconInterface> = function CreditCardMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CreditCardMinusOutlineIcon ${className}`;
      return (
        <Icon alt="CreditCardMinusOutline" className={classNames} {...propsRest}>
          <path d="M24 18V20H16V18H24M19 8V6H3V8H19M19 12H3V18H14V20H3C1.9 20 1 19.1 1 18V6C1 4.9 1.9 4 3 4H19C20.1 4 21 4.9 21 6V16H19V12" />

        </Icon>
      );
    };
    CreditCardMinusOutlineIcon.displayName = 'CreditCardMinusOutlineIcon';
      