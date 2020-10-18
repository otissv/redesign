import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FinanceIcon: FC<IconInterface> = function FinanceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FinanceIcon ${className}`;
      return (
        <Icon alt="Finance" className={classNames} {...propsRest}>
          <path d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64" />

        </Icon>
      );
    };
    FinanceIcon.displayName = 'FinanceIcon';
      