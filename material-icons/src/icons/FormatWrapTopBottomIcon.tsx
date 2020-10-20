import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatWrapTopBottomIcon: FC<IconInterface> = function FormatWrapTopBottomIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatWrapTopBottomIcon ${className}`;
      return (
        <Icon alt="FormatWrapTopBottom" className={classNames} {...propsRest}>
          <path d="M12,7L17,17H7L12,7M3,3H21V5H3V3M3,19H21V21H3V19Z" />

        </Icon>
      );
    };
    FormatWrapTopBottomIcon.displayName = 'FormatWrapTopBottomIcon';
      