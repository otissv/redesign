import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatFloatLeftIcon: FC<IconInterface> = function FormatFloatLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatFloatLeftIcon ${className}`;
      return (
        <Icon alt="FormatFloatLeft" className={classNames} {...propsRest}>
          <path d="M3,7H9V13H3V7M3,3H21V5H3V3M21,7V9H11V7H21M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z" />

        </Icon>
      );
    };
    FormatFloatLeftIcon.displayName = 'FormatFloatLeftIcon';
      