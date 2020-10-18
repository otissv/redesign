import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatAlignTopIcon: FC<IconInterface> = function FormatAlignTopIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatAlignTopIcon ${className}`;
      return (
        <Icon alt="FormatAlignTop" className={classNames} {...propsRest}>
          <path d="M13,15L15.5,17.5L16.92,16.08L12,11.16L7.08,16.08L8.5,17.5L11,15V21H13V15M3,3H21V5H3V3M3,7H13V9H3V7Z" />

        </Icon>
      );
    };
    FormatAlignTopIcon.displayName = 'FormatAlignTopIcon';
      