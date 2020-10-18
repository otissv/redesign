import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TemperatureFahrenheitIcon: FC<IconInterface> = function TemperatureFahrenheitIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TemperatureFahrenheitIcon ${className}`;
      return (
        <Icon alt="TemperatureFahrenheit" className={classNames} {...propsRest}>
          <path d="M11,20V5H20V8H14V11H19V14H14V20H11M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" />

        </Icon>
      );
    };
    TemperatureFahrenheitIcon.displayName = 'TemperatureFahrenheitIcon';
      