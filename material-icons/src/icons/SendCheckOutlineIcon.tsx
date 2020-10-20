import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SendCheckOutlineIcon: FC<IconInterface> = function SendCheckOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SendCheckOutlineIcon ${className}`;
      return (
        <Icon alt="SendCheckOutline" className={classNames} {...propsRest}>
          <path d="M2 3V10L17 12L2 14V21L23 12M4 6.03L11.53 9.25L4 8.25M11.53 14.75L4 17.97V15.75M22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17Z" />

        </Icon>
      );
    };
    SendCheckOutlineIcon.displayName = 'SendCheckOutlineIcon';
      