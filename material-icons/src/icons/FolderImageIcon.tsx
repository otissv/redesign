import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FolderImageIcon: FC<IconInterface> = function FolderImageIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderImageIcon ${className}`;
      return (
        <Icon alt="FolderImage" className={classNames} {...propsRest}>
          <path d="M5,17L9.5,11L13,15.5L15.5,12.5L19,17M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6Z" />

        </Icon>
      );
    };
    FolderImageIcon.displayName = 'FolderImageIcon';
      