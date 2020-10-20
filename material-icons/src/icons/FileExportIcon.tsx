import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileExportIcon: FC<IconInterface> = function FileExportIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileExportIcon ${className}`;
      return (
        <Icon alt="FileExport" className={classNames} {...propsRest}>
          <path d="M6,2C4.89,2 4,2.9 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,3.5L18.5,9H13M8.93,12.22H16V19.29L13.88,17.17L11.05,20L8.22,17.17L11.05,14.35" />

        </Icon>
      );
    };
    FileExportIcon.displayName = 'FileExportIcon';
      