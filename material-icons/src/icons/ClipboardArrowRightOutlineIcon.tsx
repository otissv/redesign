import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClipboardArrowRightOutlineIcon: FC<IconInterface> = function ClipboardArrowRightOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClipboardArrowRightOutlineIcon ${className}`;
      return (
        <Icon alt="ClipboardArrowRightOutline" className={classNames} {...propsRest}>
          <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3M7,7V5H5V19H19V5H17V7H7M16.91,13L11.91,18V15H7.91V11H11.91V8L16.91,13Z" />

        </Icon>
      );
    };
    ClipboardArrowRightOutlineIcon.displayName = 'ClipboardArrowRightOutlineIcon';
      