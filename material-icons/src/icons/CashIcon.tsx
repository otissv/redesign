import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CashIcon: FC<IconInterface> = function CashIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CashIcon ${className}`;
      return (
        <Icon alt="Cash" className={classNames} {...propsRest}>
          <path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />

        </Icon>
      );
    };
    CashIcon.displayName = 'CashIcon';
      