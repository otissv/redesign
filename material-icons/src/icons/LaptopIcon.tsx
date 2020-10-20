import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LaptopIcon: FC<IconInterface> = function LaptopIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LaptopIcon ${className}`;
      return (
        <Icon alt="Laptop" className={classNames} {...propsRest}>
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />

        </Icon>
      );
    };
    LaptopIcon.displayName = 'LaptopIcon';
      