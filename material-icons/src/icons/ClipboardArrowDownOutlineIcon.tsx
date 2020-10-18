import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClipboardArrowDownOutlineIcon: FC<IconInterface> = function ClipboardArrowDownOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClipboardArrowDownOutlineIcon ${className}`;
      return (
        <Icon alt="ClipboardArrowDownOutline" className={classNames} {...propsRest}>
          <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3M7,7V5H5V19H19V5H17V7H7M12,18L7,13H10V9H14V13H17L12,18Z" />

        </Icon>
      );
    };
    ClipboardArrowDownOutlineIcon.displayName = 'ClipboardArrowDownOutlineIcon';
      