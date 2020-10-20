import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AppleAirplayIcon: FC<IconInterface> = function AppleAirplayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AppleAirplayIcon ${className}`;
      return (
        <Icon alt="AppleAirplay" className={classNames} {...propsRest}>
          <path d="M6,22H18L12,16M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H7V17H3V5H21V17H17V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z" />

        </Icon>
      );
    };
    AppleAirplayIcon.displayName = 'AppleAirplayIcon';
      