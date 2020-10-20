import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SerialPortIcon: FC<IconInterface> = function SerialPortIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SerialPortIcon ${className}`;
      return (
        <Icon alt="SerialPort" className={classNames} {...propsRest}>
          <path d="M7,3H17V5H19V8H16V14H8V8H5V5H7V3M17,9H19V14H17V9M11,15H13V22H11V15M5,9H7V14H5V9Z" />

        </Icon>
      );
    };
    SerialPortIcon.displayName = 'SerialPortIcon';
      