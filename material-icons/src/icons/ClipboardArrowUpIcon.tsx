import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClipboardArrowUpIcon: FC<IconInterface> = function ClipboardArrowUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClipboardArrowUpIcon ${className}`;
      return (
        <Icon alt="ClipboardArrowUp" className={classNames} {...propsRest}>
          <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,8L7,13H10V17H14V13H17L12,8M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3Z" />

        </Icon>
      );
    };
    ClipboardArrowUpIcon.displayName = 'ClipboardArrowUpIcon';
      