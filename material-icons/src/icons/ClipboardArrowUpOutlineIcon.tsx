import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClipboardArrowUpOutlineIcon: FC<IconInterface> = function ClipboardArrowUpOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClipboardArrowUpOutlineIcon ${className}`;
      return (
        <Icon alt="ClipboardArrowUpOutline" className={classNames} {...propsRest}>
          <path d="M12,8L17,13H14V17H10V13H7L12,8M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3M7,7V5H5V19H19V5H17V7H7Z" />

        </Icon>
      );
    };
    ClipboardArrowUpOutlineIcon.displayName = 'ClipboardArrowUpOutlineIcon';
      