import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CurrencyUsdCircleIcon: FC<IconInterface> = function CurrencyUsdCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrencyUsdCircleIcon ${className}`;
      return (
        <Icon alt="CurrencyUsdCircle" className={classNames} {...propsRest}>
          <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M15 10H11V11H14A1 1 0 0 1 15 12V15A1 1 0 0 1 14 16H13V17H11V16H9V14H13V13H10A1 1 0 0 1 9 12V9A1 1 0 0 1 10 8H11V7H13V8H15Z" />

        </Icon>
      );
    };
    CurrencyUsdCircleIcon.displayName = 'CurrencyUsdCircleIcon';
      