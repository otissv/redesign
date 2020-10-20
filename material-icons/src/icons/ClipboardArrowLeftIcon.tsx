import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClipboardArrowLeftIcon: FC<IconInterface> = function ClipboardArrowLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClipboardArrowLeftIcon ${className}`;
      return (
        <Icon alt="ClipboardArrowLeft" className={classNames} {...propsRest}>
          <path d="M16,15H12V18L7,13L12,8V11H16M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    ClipboardArrowLeftIcon.displayName = 'ClipboardArrowLeftIcon';
      