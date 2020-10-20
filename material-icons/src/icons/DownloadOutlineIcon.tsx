import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DownloadOutlineIcon: FC<IconInterface> = function DownloadOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DownloadOutlineIcon ${className}`;
      return (
        <Icon alt="DownloadOutline" className={classNames} {...propsRest}>
          <path d="M13,5V11H14.17L12,13.17L9.83,11H11V5H13M15,3H9V9H5L12,16L19,9H15V3M19,18H5V20H19V18Z" />

        </Icon>
      );
    };
    DownloadOutlineIcon.displayName = 'DownloadOutlineIcon';
      