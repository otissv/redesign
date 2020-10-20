import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderMultipleOutlineIcon: FC<IconInterface> = function FolderMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="FolderMultipleOutline" className={classNames} {...propsRest}>
          <path d="M22,4A2,2 0 0,1 24,6V16A2,2 0 0,1 22,18H6A2,2 0 0,1 4,16V4A2,2 0 0,1 6,2H12L14,4H22M2,6V20H20V22H2A2,2 0 0,1 0,20V11H0V6H2M6,6V16H22V6H6Z" />

        </Icon>
      );
    };
    FolderMultipleOutlineIcon.displayName = 'FolderMultipleOutlineIcon';
      