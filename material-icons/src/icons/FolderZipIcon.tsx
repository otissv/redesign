import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderZipIcon: FC<IconInterface> = function FolderZipIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderZipIcon ${className}`;
      return (
        <Icon alt="FolderZip" className={classNames} {...propsRest}>
          <path d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M18 12H16V14H18V16H16V18H14V16H16V14H14V12H16V10H14V8H16V10H18V12Z" />

        </Icon>
      );
    };
    FolderZipIcon.displayName = 'FolderZipIcon';
      