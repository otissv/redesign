import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DownloadIcon: FC<IconInterface> = function DownloadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DownloadIcon ${className}`;
      return (
        <Icon alt="Download" className={classNames} {...propsRest}>
          <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />

        </Icon>
      );
    };
    DownloadIcon.displayName = 'DownloadIcon';
      