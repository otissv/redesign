import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatAlignRightIcon: FC<IconInterface> = function FormatAlignRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatAlignRightIcon ${className}`;
      return (
        <Icon alt="FormatAlignRight" className={classNames} {...propsRest}>
          <path d="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z" />

        </Icon>
      );
    };
    FormatAlignRightIcon.displayName = 'FormatAlignRightIcon';
      