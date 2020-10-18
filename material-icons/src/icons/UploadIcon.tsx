import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const UploadIcon: FC<IconInterface> = function UploadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UploadIcon ${className}`;
      return (
        <Icon alt="Upload" className={classNames} {...propsRest}>
          <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />

        </Icon>
      );
    };
    UploadIcon.displayName = 'UploadIcon';
      