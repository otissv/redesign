import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClipboardPlayIcon: FC<IconInterface> = function ClipboardPlayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClipboardPlayIcon ${className}`;
      return (
        <Icon alt="ClipboardPlay" className={classNames} {...propsRest}>
          <path d="M19,3H14.82C14.25,1.44 12.53,0.64 11,1.2C10.14,1.5 9.5,2.16 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M10,17V9L15,13L10,17Z" />

        </Icon>
      );
    };
    ClipboardPlayIcon.displayName = 'ClipboardPlayIcon';
      