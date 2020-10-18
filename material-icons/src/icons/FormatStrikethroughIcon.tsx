import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatStrikethroughIcon: FC<IconInterface> = function FormatStrikethroughIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatStrikethroughIcon ${className}`;
      return (
        <Icon alt="FormatStrikethrough" className={classNames} {...propsRest}>
          <path d="M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z" />

        </Icon>
      );
    };
    FormatStrikethroughIcon.displayName = 'FormatStrikethroughIcon';
      