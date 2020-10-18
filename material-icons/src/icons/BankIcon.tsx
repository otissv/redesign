import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BankIcon: FC<IconInterface> = function BankIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BankIcon ${className}`;
      return (
        <Icon alt="Bank" className={classNames} {...propsRest}>
          <path d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" />

        </Icon>
      );
    };
    BankIcon.displayName = 'BankIcon';
      