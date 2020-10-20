import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HockeySticksIcon: FC<IconInterface> = function HockeySticksIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HockeySticksIcon ${className}`;
      return (
        <Icon alt="HockeySticks" className={classNames} {...propsRest}>
          <path d="M7.58,3L5.05,4.61L9.04,10.87L10.82,8.08L7.58,3M16.43,3L7.5,17H2V21H8.5L18.96,4.61L16.43,3M14.97,14.59L13.19,17.38L15.5,21H22V17H16.5L14.97,14.59Z" />

        </Icon>
      );
    };
    HockeySticksIcon.displayName = 'HockeySticksIcon';
      