import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CreditCardOffIcon: FC<IconInterface> = function CreditCardOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CreditCardOffIcon ${className}`;
      return (
        <Icon alt="CreditCardOff" className={classNames} {...propsRest}>
          <path d="M11.2 8L7.2 4H20A2 2 0 0 1 22 6V18A1.91 1.91 0 0 1 21.88 18.68L14.2 11H20V8M20.84 22.73L18.11 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 2.65 4.54L1.11 3L2.39 1.73L22.11 21.46M9.11 11L6.11 8H4V11Z" />

        </Icon>
      );
    };
    CreditCardOffIcon.displayName = 'CreditCardOffIcon';
      