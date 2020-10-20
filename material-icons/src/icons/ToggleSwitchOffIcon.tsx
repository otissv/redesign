import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ToggleSwitchOffIcon: FC<IconInterface> = function ToggleSwitchOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToggleSwitchOffIcon ${className}`;
      return (
        <Icon alt="ToggleSwitchOff" className={classNames} {...propsRest}>
          <path d="M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z" />

        </Icon>
      );
    };
    ToggleSwitchOffIcon.displayName = 'ToggleSwitchOffIcon';
      