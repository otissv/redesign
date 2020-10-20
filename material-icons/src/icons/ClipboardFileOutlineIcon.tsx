import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClipboardFileOutlineIcon: FC<IconInterface> = function ClipboardFileOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClipboardFileOutlineIcon ${className}`;
      return (
        <Icon alt="ClipboardFileOutline" className={classNames} {...propsRest}>
          <path d="M15 23C13.9 23 13 22.11 13 21V12C13 10.9 13.9 10 15 10H19L23 14V21C23 22.11 22.11 23 21 23H15M15 21H21V14.83L18.17 12H15V21M19 3C20.1 3 21 3.9 21 5V9.17L19.83 8H19V5H17V7H7V5H5V19H11V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3H19M12 3C11.45 3 11 3.45 11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3Z" />

        </Icon>
      );
    };
    ClipboardFileOutlineIcon.displayName = 'ClipboardFileOutlineIcon';
      