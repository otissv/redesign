import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderDownloadIcon: FC<IconInterface> = function FolderDownloadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderDownloadIcon ${className}`;
      return (
        <Icon alt="FolderDownload" className={classNames} {...propsRest}>
          <path d="M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20M19.25,13H16V9H14V13H10.75L15,17.25" />

        </Icon>
      );
    };
    FolderDownloadIcon.displayName = 'FolderDownloadIcon';
      