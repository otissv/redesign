import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatSizeIcon: FC<IconInterface> = function FormatSizeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatSizeIcon ${className}`;
      return (
        <Icon alt="FormatSize" className={classNames} {...propsRest}>
          <path d="M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z" />

        </Icon>
      );
    };
    FormatSizeIcon.displayName = 'FormatSizeIcon';
      