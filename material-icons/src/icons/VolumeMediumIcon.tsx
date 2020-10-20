import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const VolumeMediumIcon: FC<IconInterface> = function VolumeMediumIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VolumeMediumIcon ${className}`;
      return (
        <Icon alt="VolumeMedium" className={classNames} {...propsRest}>
          <path d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" />

        </Icon>
      );
    };
    VolumeMediumIcon.displayName = 'VolumeMediumIcon';
      