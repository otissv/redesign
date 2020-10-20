import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BankPlusIcon: FC<IconInterface> = function BankPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BankPlusIcon ${className}`;
      return (
        <Icon alt="BankPlus" className={classNames} {...propsRest}>
          <path d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11.5,1L21,6V8H2V6L11.5,1M16,10H19V12.08L18,12C17.3,12 16.63,12.12 16,12.34V10M2,22V19H12.08C12.27,20.14 12.79,21.17 13.53,22H2M10,10H13V14.68C12.54,15.37 12.22,16.15 12.08,17H10V10M4,10H7V17H4V10Z" />

        </Icon>
      );
    };
    BankPlusIcon.displayName = 'BankPlusIcon';
      