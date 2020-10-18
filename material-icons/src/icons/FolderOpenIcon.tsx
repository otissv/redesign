import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderOpenIcon: FC<IconInterface> = function FolderOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderOpenIcon ${className}`;
      return (
        <Icon alt="FolderOpen" className={classNames} {...propsRest}>
          <path d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" />

        </Icon>
      );
    };
    FolderOpenIcon.displayName = 'FolderOpenIcon';
      