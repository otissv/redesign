import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatWrapInlineIcon: FC<IconInterface> = function FormatWrapInlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatWrapInlineIcon ${className}`;
      return (
        <Icon alt="FormatWrapInline" className={classNames} {...propsRest}>
          <path d="M8,7L13,17H3L8,7M3,3H21V5H3V3M21,15V17H14V15H21M3,19H21V21H3V19Z" />

        </Icon>
      );
    };
    FormatWrapInlineIcon.displayName = 'FormatWrapInlineIcon';
      