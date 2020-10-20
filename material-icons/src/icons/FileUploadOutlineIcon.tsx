import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileUploadOutlineIcon: FC<IconInterface> = function FileUploadOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileUploadOutlineIcon ${className}`;
      return (
        <Icon alt="FileUploadOutline" className={classNames} {...propsRest}>
          <path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z" />

        </Icon>
      );
    };
    FileUploadOutlineIcon.displayName = 'FileUploadOutlineIcon';
      