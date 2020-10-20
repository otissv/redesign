import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Signal4GIcon: FC<IconInterface> = function Signal4GIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Signal4GIcon ${className}`;
      return (
        <Icon alt="Signal4G" className={classNames} {...propsRest}>
          <path d="M22,16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16A3,3 0 0,0 13,7.5V16.5A3,3 0 0,0 16,19.5H19A3,3 0 0,0 22,16.5M8,19.5H11V4.5H8V10.5H5V4.5H2V13.5H8V19.5Z" />

        </Icon>
      );
    };
    Signal4GIcon.displayName = 'Signal4GIcon';
      