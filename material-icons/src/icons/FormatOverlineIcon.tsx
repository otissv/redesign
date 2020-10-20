import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatOverlineIcon: FC<IconInterface> = function FormatOverlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatOverlineIcon ${className}`;
      return (
        <Icon alt="FormatOverline" className={classNames} {...propsRest}>
          <path d="M5,5H19V3H5V5M9.62,16L12,9.67L14.37,16M11,7L5.5,21H7.75L8.87,18H15.12L16.25,21H18.5L13,7H11Z" />

        </Icon>
      );
    };
    FormatOverlineIcon.displayName = 'FormatOverlineIcon';
      