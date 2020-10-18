import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CurrencyTryIcon: FC<IconInterface> = function CurrencyTryIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrencyTryIcon ${className}`;
      return (
        <Icon alt="CurrencyTry" className={classNames} {...propsRest}>
          <path d="M19,12A9,9 0 0,1 10,21H8V12.77L5,13.87V11.74L8,10.64V8.87L5,9.96V7.84L8,6.74V3H10V6L15,4.2V6.32L10,8.14V9.92L15,8.1V10.23L10,12.05V19A7,7 0 0,0 17,12H19Z" />

        </Icon>
      );
    };
    CurrencyTryIcon.displayName = 'CurrencyTryIcon';
      