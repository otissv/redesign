import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClipboardIcon: FC<IconInterface> = function ClipboardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClipboardIcon ${className}`;
      return (
        <Icon alt="Clipboard" className={classNames} {...propsRest}>
          <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3" />

        </Icon>
      );
    };
    ClipboardIcon.displayName = 'ClipboardIcon';
      