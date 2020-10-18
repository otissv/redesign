import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatHeaderIncreaseIcon: FC<IconInterface> = function FormatHeaderIncreaseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHeaderIncreaseIcon ${className}`;
      return (
        <Icon alt="FormatHeaderIncrease" className={classNames} {...propsRest}>
          <path d="M4,4H6V10H10V4H12V18H10V12H6V18H4V4M14.59,7.41L18.17,11L14.59,14.59L16,16L21,11L16,6L14.59,7.41Z" />

        </Icon>
      );
    };
    FormatHeaderIncreaseIcon.displayName = 'FormatHeaderIncreaseIcon';
      