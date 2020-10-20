import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CreditCardIcon: FC<IconInterface> = function CreditCardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CreditCardIcon ${className}`;
      return (
        <Icon alt="CreditCard" className={classNames} {...propsRest}>
          <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z" />

        </Icon>
      );
    };
    CreditCardIcon.displayName = 'CreditCardIcon';
      