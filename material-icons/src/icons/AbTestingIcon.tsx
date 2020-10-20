import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AbTestingIcon: FC<IconInterface> = function AbTestingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AbTestingIcon ${className}`;
      return (
        <Icon alt="AbTesting" className={classNames} {...propsRest}>
          <path d="M4 2A2 2 0 0 0 2 4V12H4V8H6V12H8V4A2 2 0 0 0 6 2H4M4 4H6V6H4M22 15.5V14A2 2 0 0 0 20 12H16V22H20A2 2 0 0 0 22 20V18.5A1.54 1.54 0 0 0 20.5 17A1.54 1.54 0 0 0 22 15.5M20 20H18V18H20V20M20 16H18V14H20M5.79 21.61L4.21 20.39L18.21 2.39L19.79 3.61Z" />

        </Icon>
      );
    };
    AbTestingIcon.displayName = 'AbTestingIcon';
      