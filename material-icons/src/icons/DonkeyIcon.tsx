import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DonkeyIcon: FC<IconInterface> = function DonkeyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DonkeyIcon ${className}`;
      return (
        <Icon alt="Donkey" className={classNames} {...propsRest}>
          <path d="M21.34,10.35L21.27,10.28L21.18,10.19L18,7V6A0.5,0.5 0 0,0 17.5,5.5C17.36,5.5 17.22,5.56 17.13,5.66L13.46,9H7C6.32,9 5.69,9.35 5.32,9.92L2.62,12.59C2.29,13.04 2.39,13.66 2.84,14C3.18,14.24 3.65,14.25 4,14L5,13.07V19H8V15H13V19H16V13.83C16,13.3 16.21,12.79 16.59,12.42L18,11L20,12V12C20.15,12.08 20.32,12.13 20.5,12.13C21.1,12.11 21.59,11.61 21.58,11C21.57,10.76 21.5,10.53 21.34,10.35Z" />

        </Icon>
      );
    };
    DonkeyIcon.displayName = 'DonkeyIcon';
      