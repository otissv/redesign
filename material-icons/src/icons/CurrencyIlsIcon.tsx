import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CurrencyIlsIcon: FC<IconInterface> = function CurrencyIlsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrencyIlsIcon ${className}`;
      return (
        <Icon alt="CurrencyIls" className={classNames} {...propsRest}>
          <path d="M22,16A5,5 0 0,1 17,21H8V9H10V19H17A3,3 0 0,0 20,16V3H22V16M16,8V15H14V8A3,3 0 0,0 11,5H4V21H2V3H11A5,5 0 0,1 16,8Z" />

        </Icon>
      );
    };
    CurrencyIlsIcon.displayName = 'CurrencyIlsIcon';
      