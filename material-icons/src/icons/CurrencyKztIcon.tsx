import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CurrencyKztIcon: FC<IconInterface> = function CurrencyKztIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrencyKztIcon ${className}`;
      return (
        <Icon alt="CurrencyKzt" className={classNames} {...propsRest}>
          <path d="M5,3H19V5H5V3M5,6H19V8H13V21H11V8H5V6Z" />

        </Icon>
      );
    };
    CurrencyKztIcon.displayName = 'CurrencyKztIcon';
      