import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ClockCheckOutlineIcon: FC<IconInterface> = function ClockCheckOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockCheckOutlineIcon ${className}`;
      return (
        <Icon alt="ClockCheckOutline" className={classNames} {...propsRest}>
          <path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13.1 19.9C12.7 20 12.4 20 12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12C20 12.4 20 12.7 19.9 13.1C20.6 13.2 21.2 13.4 21.8 13.7C21.9 13.1 22 12.6 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12C2 17.5 6.5 22 12 22C12.6 22 13.2 21.9 13.7 21.8C13.4 21.3 13.2 20.6 13.1 19.9M15.6 14.1L12.5 12.3V7H11V13L14.5 15.1C14.8 14.7 15.2 14.4 15.6 14.1Z" />

        </Icon>
      );
    };
    ClockCheckOutlineIcon.displayName = 'ClockCheckOutlineIcon';
      