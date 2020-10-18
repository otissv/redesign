import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileOutlineIcon: FC<IconInterface> = function FileOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileOutlineIcon ${className}`;
      return (
        <Icon alt="FileOutline" className={classNames} {...propsRest}>
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />

        </Icon>
      );
    };
    FileOutlineIcon.displayName = 'FileOutlineIcon';
      