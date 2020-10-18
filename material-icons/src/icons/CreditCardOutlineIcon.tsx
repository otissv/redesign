import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CreditCardOutlineIcon: FC<IconInterface> = function CreditCardOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CreditCardOutlineIcon ${className}`;
      return (
        <Icon alt="CreditCardOutline" className={classNames} {...propsRest}>
          <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />

        </Icon>
      );
    };
    CreditCardOutlineIcon.displayName = 'CreditCardOutlineIcon';
      