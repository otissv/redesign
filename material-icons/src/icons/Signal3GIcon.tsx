import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Signal3GIcon: FC<IconInterface> = function Signal3GIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Signal3GIcon ${className}`;
      return (
        <Icon alt="Signal3G" className={classNames} {...propsRest}>
          <path d="M11,16.5V14.25C11,13 10,12 8.75,12C10,12 11,11 11,9.75V7.5A3,3 0 0,0 8,4.5H2V7.5H8V10.5H5V13.5H8V16.5H2V19.5H8A3,3 0 0,0 11,16.5M22,16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16A3,3 0 0,0 13,7.5V16.5A3,3 0 0,0 16,19.5H19A3,3 0 0,0 22,16.5Z" />

        </Icon>
      );
    };
    Signal3GIcon.displayName = 'Signal3GIcon';
      