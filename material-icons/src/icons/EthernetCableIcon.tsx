import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EthernetCableIcon: FC<IconInterface> = function EthernetCableIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EthernetCableIcon ${className}`;
      return (
        <Icon alt="EthernetCable" className={classNames} {...propsRest}>
          <path d="M11,3V7H13V3H11M8,4V11H16V4H14V8H10V4H8M10,12V22H14V12H10Z" />

        </Icon>
      );
    };
    EthernetCableIcon.displayName = 'EthernetCableIcon';
      