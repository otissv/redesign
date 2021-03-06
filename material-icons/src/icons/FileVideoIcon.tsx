import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileVideoIcon: FC<IconInterface> = function FileVideoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileVideoIcon ${className}`;
      return (
        <Icon alt="FileVideo" className={classNames} {...propsRest}>
          <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M17,19V13L14,15.2V13H7V19H14V16.8L17,19Z" />

        </Icon>
      );
    };
    FileVideoIcon.displayName = 'FileVideoIcon';
      