import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LightSwitchIcon: FC<IconInterface> = function LightSwitchIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LightSwitchIcon ${className}`;
      return (
        <Icon alt="LightSwitch" className={classNames} {...propsRest}>
          <path d="M7,1A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1H7M7,3H17V21H7V3M9,6V18H15V6H9M10,7H14V11H10V7M10,13H14V17H10V13Z" />

        </Icon>
      );
    };
    LightSwitchIcon.displayName = 'LightSwitchIcon';
      