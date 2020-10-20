import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HelicopterIcon: FC<IconInterface> = function HelicopterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HelicopterIcon ${className}`;
      return (
        <Icon alt="Helicopter" className={classNames} {...propsRest}>
          <path d="M3,3H17V5H3V3M23,6V10.5L14.75,12.2C14.91,12.6 15,13.04 15,13.5C15,14.9 14.18,16.1 13,16.66V17L13,19H16V21H4A3,3 0 0,1 1,18V17H3V18A1,1 0 0,0 4,19H5V16.74C3.25,16.13 2,14.46 2,12.5C2,10 4,8 6.5,8H9V6H11V8H21V6H23M11,19V17H7V19H11M7.5,10C6.12,10 5,10.9 5,12C5,13.1 6.12,14 7.5,14C8.88,14 10,13.1 10,12C10,10.9 8.88,10 7.5,10Z" />

        </Icon>
      );
    };
    HelicopterIcon.displayName = 'HelicopterIcon';
      