import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HammerIcon: FC<IconInterface> = function HammerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HammerIcon ${className}`;
      return (
        <Icon alt="Hammer" className={classNames} {...propsRest}>
          <path d="M2 19.63L13.43 8.2L12.72 7.5L14.14 6.07L12 3.89C13.2 2.7 15.09 2.7 16.27 3.89L19.87 7.5L18.45 8.91H21.29L22 9.62L18.45 13.21L17.74 12.5V9.62L16.27 11.04L15.56 10.33L4.13 21.76L2 19.63Z" />

        </Icon>
      );
    };
    HammerIcon.displayName = 'HammerIcon';
      