import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderLockIcon: FC<IconInterface> = function FolderLockIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderLockIcon ${className}`;
      return (
        <Icon alt="FolderLock" className={classNames} {...propsRest}>
          <path d="M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20M19,17V13H18V12A3,3 0 0,0 15,9A3,3 0 0,0 12,12V13H11V17H19M15,11A1,1 0 0,1 16,12V13H14V12A1,1 0 0,1 15,11Z" />

        </Icon>
      );
    };
    FolderLockIcon.displayName = 'FolderLockIcon';
      