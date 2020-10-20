import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderTextOutlineIcon: FC<IconInterface> = function FolderTextOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderTextOutlineIcon ${className}`;
      return (
        <Icon alt="FolderTextOutline" className={classNames} {...propsRest}>
          <path d="M20,18H4V8H20M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M15,16H6V14H15V16M18,12H6V10H18V12Z" />

        </Icon>
      );
    };
    FolderTextOutlineIcon.displayName = 'FolderTextOutlineIcon';
      