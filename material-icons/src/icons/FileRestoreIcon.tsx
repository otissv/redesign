import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileRestoreIcon: FC<IconInterface> = function FileRestoreIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileRestoreIcon ${className}`;
      return (
        <Icon alt="FileRestore" className={classNames} {...propsRest}>
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M12,18C9.95,18 8.19,16.76 7.42,15H9.13C9.76,15.9 10.81,16.5 12,16.5A3.5,3.5 0 0,0 15.5,13A3.5,3.5 0 0,0 12,9.5C10.65,9.5 9.5,10.28 8.9,11.4L10.5,13H6.5V9L7.8,10.3C8.69,8.92 10.23,8 12,8A5,5 0 0,1 17,13A5,5 0 0,1 12,18Z" />

        </Icon>
      );
    };
    FileRestoreIcon.displayName = 'FileRestoreIcon';
      