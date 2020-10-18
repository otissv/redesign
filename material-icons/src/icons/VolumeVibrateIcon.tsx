import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VolumeVibrateIcon: FC<IconInterface> = function VolumeVibrateIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VolumeVibrateIcon ${className}`;
      return (
        <Icon alt="VolumeVibrate" className={classNames} {...propsRest}>
          <path d="M4 9V15H8L13 20V4L8 9H4M16.55 2.47L15.5 3.53L17.93 6L15 9L17.93 12L15 15L17.93 18L15.5 20.47L16.55 21.53L20 18L17.07 15L20 12L17.07 9L20 6L16.55 2.47Z" />

        </Icon>
      );
    };
    VolumeVibrateIcon.displayName = 'VolumeVibrateIcon';
      