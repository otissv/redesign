import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EightTrackIcon: FC<IconInterface> = function EightTrackIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EightTrackIcon ${className}`;
      return (
        <Icon alt="EightTrack" className={classNames} {...propsRest}>
          <path d="M7,2L5,5V16L6,20C6.27,21.07 6.9,22 8,22H16A2,2 0 0,0 18,20L19,16V5L17,2H15V3H13V2H7M7,6H17V16H7V6Z" />

        </Icon>
      );
    };
    EightTrackIcon.displayName = 'EightTrackIcon';
      