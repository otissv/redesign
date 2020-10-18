import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderMoveIcon: FC<IconInterface> = function FolderMoveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderMoveIcon ${className}`;
      return (
        <Icon alt="FolderMove" className={classNames} {...propsRest}>
          <path d="M14,18V15H10V11H14V8L19,13M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />

        </Icon>
      );
    };
    FolderMoveIcon.displayName = 'FolderMoveIcon';
      