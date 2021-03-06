import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ElevationDeclineIcon: FC<IconInterface> = function ElevationDeclineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ElevationDeclineIcon ${className}`;
      return (
        <Icon alt="ElevationDecline" className={classNames} {...propsRest}>
          <path d="M21,21H3V11.25L9.45,15L13.22,12.8L21,17.29V21M3,8.94V6.75L9.45,10.5L13.22,8.3L21,12.79V15L13.22,10.5L9.45,12.67L3,8.94Z" />

        </Icon>
      );
    };
    ElevationDeclineIcon.displayName = 'ElevationDeclineIcon';
      