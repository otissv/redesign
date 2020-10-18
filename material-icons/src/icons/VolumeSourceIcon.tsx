import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VolumeSourceIcon: FC<IconInterface> = function VolumeSourceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VolumeSourceIcon ${className}`;
      return (
        <Icon alt="VolumeSource" className={classNames} {...propsRest}>
          <path d="M3 9V15H7L12 20V4L7 9H3M16 15H14V9H16V15M20 19H18V5H20V19Z" />

        </Icon>
      );
    };
    VolumeSourceIcon.displayName = 'VolumeSourceIcon';
      