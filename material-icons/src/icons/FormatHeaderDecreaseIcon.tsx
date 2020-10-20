import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatHeaderDecreaseIcon: FC<IconInterface> = function FormatHeaderDecreaseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHeaderDecreaseIcon ${className}`;
      return (
        <Icon alt="FormatHeaderDecrease" className={classNames} {...propsRest}>
          <path d="M4,4H6V10H10V4H12V18H10V12H6V18H4V4M20.42,7.41L16.83,11L20.42,14.59L19,16L14,11L19,6L20.42,7.41Z" />

        </Icon>
      );
    };
    FormatHeaderDecreaseIcon.displayName = 'FormatHeaderDecreaseIcon';
      