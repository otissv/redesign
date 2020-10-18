import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileDownloadOutlineIcon: FC<IconInterface> = function FileDownloadOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileDownloadOutlineIcon ${className}`;
      return (
        <Icon alt="FileDownloadOutline" className={classNames} {...propsRest}>
          <path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z" />

        </Icon>
      );
    };
    FileDownloadOutlineIcon.displayName = 'FileDownloadOutlineIcon';
      