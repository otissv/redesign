import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderIcon: FC<IconInterface> = function FolderIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderIcon ${className}`;
      return (
        <Icon alt="Folder" className={classNames} {...propsRest}>
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />

        </Icon>
      );
    };
    FolderIcon.displayName = 'FolderIcon';
      