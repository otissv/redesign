import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileTableOutlineIcon: FC<IconInterface> = function FileTableOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileTableOutlineIcon ${className}`;
      return (
        <Icon alt="FileTableOutline" className={classNames} {...propsRest}>
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,13H7V11H10V13M14,13H11V11H14V13M10,16H7V14H10V16M14,16H11V14H14V16M10,19H7V17H10V19M14,19H11V17H14V19Z" />

        </Icon>
      );
    };
    FileTableOutlineIcon.displayName = 'FileTableOutlineIcon';
      