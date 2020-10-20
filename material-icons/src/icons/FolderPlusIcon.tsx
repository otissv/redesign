import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderPlusIcon: FC<IconInterface> = function FolderPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderPlusIcon ${className}`;
      return (
        <Icon alt="FolderPlus" className={classNames} {...propsRest}>
          <path d="M10,4L12,6H20A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10M15,9V12H12V14H15V17H17V14H20V12H17V9H15Z" />

        </Icon>
      );
    };
    FolderPlusIcon.displayName = 'FolderPlusIcon';
      