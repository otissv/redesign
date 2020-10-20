import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HazardLightsIcon: FC<IconInterface> = function HazardLightsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HazardLightsIcon ${className}`;
      return (
        <Icon alt="HazardLights" className={classNames} {...propsRest}>
          <path d="M12,12L14.33,16H9.68L12,12M12,8L6.21,18H17.8L12,8M12,2L1,21H23L12,2M12,6L19.53,19H4.47L12,6Z" />

        </Icon>
      );
    };
    HazardLightsIcon.displayName = 'HazardLightsIcon';
      