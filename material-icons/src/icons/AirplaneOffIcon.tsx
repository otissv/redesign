import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AirplaneOffIcon: FC<IconInterface> = function AirplaneOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AirplaneOffIcon ${className}`;
      return (
        <Icon alt="AirplaneOff" className={classNames} {...propsRest}>
          <path d="M3.15,5.27L8.13,10.26L2.15,14V16L10.15,13.5V19L8.15,20.5V22L11.65,21L15.15,22V20.5L13.15,19V15.27L18.87,21L20.15,19.73L4.42,4M13.15,9V3.5A1.5,1.5 0 0,0 11.65,2A1.5,1.5 0 0,0 10.15,3.5V7.18L17.97,15L21.15,16V14L13.15,9Z" />

        </Icon>
      );
    };
    AirplaneOffIcon.displayName = 'AirplaneOffIcon';
      