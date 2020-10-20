import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CurrencyEthIcon: FC<IconInterface> = function CurrencyEthIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrencyEthIcon ${className}`;
      return (
        <Icon alt="CurrencyEth" className={classNames} {...propsRest}>
          <path d="M6,5H18V7H6M7,11H17V13H7M5.5,17H18.5V19H5.5" />

        </Icon>
      );
    };
    CurrencyEthIcon.displayName = 'CurrencyEthIcon';
      