import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VolumeMuteIcon: FC<IconInterface> = function VolumeMuteIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VolumeMuteIcon ${className}`;
      return (
        <Icon alt="VolumeMute" className={classNames} {...propsRest}>
          <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />

        </Icon>
      );
    };
    VolumeMuteIcon.displayName = 'VolumeMuteIcon';
      