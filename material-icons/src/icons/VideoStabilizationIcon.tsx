import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VideoStabilizationIcon: FC<IconInterface> = function VideoStabilizationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VideoStabilizationIcon ${className}`;
      return (
        <Icon alt="VideoStabilization" className={classNames} {...propsRest}>
          <path d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H20V6H4M7.24,6.58L18.83,9.69L16.76,17.42L5.17,14.31L7.24,6.58Z" />

        </Icon>
      );
    };
    VideoStabilizationIcon.displayName = 'VideoStabilizationIcon';
      