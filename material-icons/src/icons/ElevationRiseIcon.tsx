import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ElevationRiseIcon: FC<IconInterface> = function ElevationRiseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ElevationRiseIcon ${className}`;
      return (
        <Icon alt="ElevationRise" className={classNames} {...propsRest}>
          <path d="M3,21V17.29L10.78,12.8L14.55,15L21,11.25V21H3M21,8.94L14.55,12.67L10.78,10.5L3,15V12.79L10.78,8.3L14.55,10.5L21,6.75V8.94Z" />

        </Icon>
      );
    };
    ElevationRiseIcon.displayName = 'ElevationRiseIcon';
      