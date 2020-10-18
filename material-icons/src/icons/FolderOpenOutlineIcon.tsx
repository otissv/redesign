import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderOpenOutlineIcon: FC<IconInterface> = function FolderOpenOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderOpenOutlineIcon ${className}`;
      return (
        <Icon alt="FolderOpenOutline" className={classNames} {...propsRest}>
          <path d="M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z" />

        </Icon>
      );
    };
    FolderOpenOutlineIcon.displayName = 'FolderOpenOutlineIcon';
      