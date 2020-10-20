import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UsbPortIcon: FC<IconInterface> = function UsbPortIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UsbPortIcon ${className}`;
      return (
        <Icon alt="UsbPort" className={classNames} {...propsRest}>
          <path d="M8 2C6.9 2 6 2.9 6 4V12H5V16L9 20V22H15V20L19 16V12H18V4C18 2.9 17.11 2 16 2M8 4H16V12H8M9 7V9H11V7M13 7V9H15V7Z" />

        </Icon>
      );
    };
    UsbPortIcon.displayName = 'UsbPortIcon';
      