import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileDownloadIcon: FC<IconInterface> = function FileDownloadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileDownloadIcon ${className}`;
      return (
        <Icon alt="FileDownload" className={classNames} {...propsRest}>
          <path d="M14,2H6C4.89,2 4,2.89 4,4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V8L14,2M12,19L8,15H10.5V12H13.5V15H16L12,19M13,9V3.5L18.5,9H13Z" />

        </Icon>
      );
    };
    FileDownloadIcon.displayName = 'FileDownloadIcon';
      