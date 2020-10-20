import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Signal5GIcon: FC<IconInterface> = function Signal5GIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Signal5GIcon ${className}`;
      return (
        <Icon alt="Signal5G" className={classNames} {...propsRest}>
          <path d="M22,16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16A3,3 0 0,0 13,7.5V16.5A3,3 0 0,0 16,19.5H19A3,3 0 0,0 22,16.5M10,4.5H3V12L3,13.5H7V16.5H3V19.5H8.5A1.5,1.5 0 0,0 10,18V12A1.5,1.5 0 0,0 8.5,10.5H6V7.5H10V4.5Z" />

        </Icon>
      );
    };
    Signal5GIcon.displayName = 'Signal5GIcon';
      