import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatAlignJustifyIcon: FC<IconInterface> = function FormatAlignJustifyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatAlignJustifyIcon ${className}`;
      return (
        <Icon alt="FormatAlignJustify" className={classNames} {...propsRest}>
          <path d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z" />

        </Icon>
      );
    };
    FormatAlignJustifyIcon.displayName = 'FormatAlignJustifyIcon';
      