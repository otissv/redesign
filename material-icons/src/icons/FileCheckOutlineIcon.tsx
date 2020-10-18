import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileCheckOutlineIcon: FC<IconInterface> = function FileCheckOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileCheckOutlineIcon ${className}`;
      return (
        <Icon alt="FileCheckOutline" className={classNames} {...propsRest}>
          <path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M11.2,18.46L8.45,15.46L9.61,14.3L11.2,15.88L14.78,12.3L15.95,13.71L11.2,18.46Z" />

        </Icon>
      );
    };
    FileCheckOutlineIcon.displayName = 'FileCheckOutlineIcon';
      