import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderMusicOutlineIcon: FC<IconInterface> = function FolderMusicOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderMusicOutlineIcon ${className}`;
      return (
        <Icon alt="FolderMusicOutline" className={classNames} {...propsRest}>
          <path d="M20 18V8H4V18H20M20 6C21.1 6 22 6.89 22 8V18C22 19.1 21.1 20 20 20H4C2.89 20 2 19.1 2 18L2 6C2 4.89 2.89 4 4 4H10L12 6H20M18 9V11H16V15C16 16.11 15.11 17 14 17C12.9 17 12 16.11 12 15C12 13.9 12.9 13 14 13C14.17 13 14.34 13 14.5 13.06V9H18Z" />

        </Icon>
      );
    };
    FolderMusicOutlineIcon.displayName = 'FolderMusicOutlineIcon';
      