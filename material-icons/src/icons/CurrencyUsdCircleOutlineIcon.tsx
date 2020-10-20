import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CurrencyUsdCircleOutlineIcon: FC<IconInterface> = function CurrencyUsdCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrencyUsdCircleOutlineIcon ${className}`;
      return (
        <Icon alt="CurrencyUsdCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z" />

        </Icon>
      );
    };
    CurrencyUsdCircleOutlineIcon.displayName = 'CurrencyUsdCircleOutlineIcon';
      