import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FloorLampDualIcon: FC<IconInterface> = function FloorLampDualIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FloorLampDualIcon ${className}`;
      return (
        <Icon alt="FloorLampDual" className={classNames} {...propsRest}>
          <path d="M11.73 10.06L10.17 11.24L11 12.2V20H8V22H16V20H13V12.3L13.85 11.26L12.27 10.07L11.73 10.06M9.08 10.82L3 6.81L9.39 2L11.55 8.93L9.08 10.82M14.61 2L21 6.81L14.92 10.82L12.44 8.95L14.61 2Z" />

        </Icon>
      );
    };
    FloorLampDualIcon.displayName = 'FloorLampDualIcon';
      