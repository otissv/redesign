import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatFloatNoneIcon: FC<IconInterface> = function FormatFloatNoneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatFloatNoneIcon ${className}`;
      return (
        <Icon alt="FormatFloatNone" className={classNames} {...propsRest}>
          <path d="M3,7H9V13H3V7M3,3H21V5H3V3M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z" />

        </Icon>
      );
    };
    FormatFloatNoneIcon.displayName = 'FormatFloatNoneIcon';
      