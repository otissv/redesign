import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UsbIcon: FC<IconInterface> = function UsbIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UsbIcon ${className}`;
      return (
        <Icon alt="Usb" className={classNames} {...propsRest}>
          <path d="M15,7V11H16V13H13V5H15L12,1L9,5H11V13H8V10.93C8.7,10.56 9.2,9.85 9.2,9C9.2,7.78 8.21,6.8 7,6.8C5.78,6.8 4.8,7.78 4.8,9C4.8,9.85 5.3,10.56 6,10.93V13A2,2 0 0,0 8,15H11V18.05C10.29,18.41 9.8,19.15 9.8,20A2.2,2.2 0 0,0 12,22.2A2.2,2.2 0 0,0 14.2,20C14.2,19.15 13.71,18.41 13,18.05V15H16A2,2 0 0,0 18,13V11H19V7H15Z" />

        </Icon>
      );
    };
    UsbIcon.displayName = 'UsbIcon';
      