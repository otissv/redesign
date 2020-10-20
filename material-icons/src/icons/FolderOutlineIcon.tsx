import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderOutlineIcon: FC<IconInterface> = function FolderOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderOutlineIcon ${className}`;
      return (
        <Icon alt="FolderOutline" className={classNames} {...propsRest}>
          <path d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />

        </Icon>
      );
    };
    FolderOutlineIcon.displayName = 'FolderOutlineIcon';
      