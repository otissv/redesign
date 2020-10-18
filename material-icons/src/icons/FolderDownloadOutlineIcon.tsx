import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderDownloadOutlineIcon: FC<IconInterface> = function FolderDownloadOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderDownloadOutlineIcon ${className}`;
      return (
        <Icon alt="FolderDownloadOutline" className={classNames} {...propsRest}>
          <path d="M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M14 9H16V13H19L15 17L11 13H14Z" />

        </Icon>
      );
    };
    FolderDownloadOutlineIcon.displayName = 'FolderDownloadOutlineIcon';
      