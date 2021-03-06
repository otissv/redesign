import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UploadOutlineIcon: FC<IconInterface> = function UploadOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UploadOutlineIcon ${className}`;
      return (
        <Icon alt="UploadOutline" className={classNames} {...propsRest}>
          <path d="M9,10V16H15V10H19L12,3L5,10H9M12,5.8L14.2,8H13V14H11V8H9.8L12,5.8M19,18H5V20H19V18Z" />

        </Icon>
      );
    };
    UploadOutlineIcon.displayName = 'UploadOutlineIcon';
      