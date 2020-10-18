import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderLockOpenIcon: FC<IconInterface> = function FolderLockOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderLockOpenIcon ${className}`;
      return (
        <Icon alt="FolderLockOpen" className={classNames} {...propsRest}>
          <path d="M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20M19,17V13H18L16,13H14V11A1,1 0 0,1 15,10A1,1 0 0,1 16,11H18A3,3 0 0,0 15,8A3,3 0 0,0 12,11V13H11V17H19Z" />

        </Icon>
      );
    };
    FolderLockOpenIcon.displayName = 'FolderLockOpenIcon';
      