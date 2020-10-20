import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatAlignBottomIcon: FC<IconInterface> = function FormatAlignBottomIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatAlignBottomIcon ${className}`;
      return (
        <Icon alt="FormatAlignBottom" className={classNames} {...propsRest}>
          <path d="M13,9L15.5,6.5L16.92,7.92L12,12.84L7.08,7.92L8.5,6.5L11,9V3H13V9M3,15H21V17H3V15M3,19H13V21H3V19Z" />

        </Icon>
      );
    };
    FormatAlignBottomIcon.displayName = 'FormatAlignBottomIcon';
      