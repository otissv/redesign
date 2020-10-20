import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FloorLampIcon: FC<IconInterface> = function FloorLampIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FloorLampIcon ${className}`;
      return (
        <Icon alt="FloorLamp" className={classNames} {...propsRest}>
          <path d="M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z" />

        </Icon>
      );
    };
    FloorLampIcon.displayName = 'FloorLampIcon';
      