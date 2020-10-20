import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Video4KBoxIcon: FC<IconInterface> = function Video4KBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Video4KBoxIcon ${className}`;
      return (
        <Icon alt="Video4KBox" className={classNames} {...propsRest}>
          <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,13.5H11V15H9.5V13.5H6.5V9H8V12H9.5V9H11V12H12V13.5M18,15H16.2L14.4,12.8V15H13V9H14.5V11.2L16.2,9H18L15.8,12L18,15Z" />

        </Icon>
      );
    };
    Video4KBoxIcon.displayName = 'Video4KBoxIcon';
      