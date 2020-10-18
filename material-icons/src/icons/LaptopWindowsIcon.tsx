import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LaptopWindowsIcon: FC<IconInterface> = function LaptopWindowsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LaptopWindowsIcon ${className}`;
      return (
        <Icon alt="LaptopWindows" className={classNames} {...propsRest}>
          <path d="M3,4H21A1,1 0 0,1 22,5V16A1,1 0 0,1 21,17H22L24,20V21H0V20L2,17H3A1,1 0 0,1 2,16V5A1,1 0 0,1 3,4M4,6V15H20V6H4Z" />

        </Icon>
      );
    };
    LaptopWindowsIcon.displayName = 'LaptopWindowsIcon';
      