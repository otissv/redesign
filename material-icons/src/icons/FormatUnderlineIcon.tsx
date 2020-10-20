import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatUnderlineIcon: FC<IconInterface> = function FormatUnderlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatUnderlineIcon ${className}`;
      return (
        <Icon alt="FormatUnderline" className={classNames} {...propsRest}>
          <path d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z" />

        </Icon>
      );
    };
    FormatUnderlineIcon.displayName = 'FormatUnderlineIcon';
      