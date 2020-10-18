import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CurrencyJpyIcon: FC<IconInterface> = function CurrencyJpyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrencyJpyIcon ${className}`;
      return (
        <Icon alt="CurrencyJpy" className={classNames} {...propsRest}>
          <path d="M11,21V16H6V14H11V13.71L10.16,12H6V10H9.19L5.77,3H8L12,11.2L16,3H18.23L14.81,10H18V12H13.84L13,13.71V14H18V16H13V21H11Z" />

        </Icon>
      );
    };
    CurrencyJpyIcon.displayName = 'CurrencyJpyIcon';
      