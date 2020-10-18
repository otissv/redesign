import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TrackpadIcon: FC<IconInterface> = function TrackpadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrackpadIcon ${className}`;
      return (
        <Icon alt="Trackpad" className={classNames} {...propsRest}>
          <path d="M4,3H20A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M4,5V13H20V5H4M4,19H11V15H4V19M20,19V15H13V19H20Z" />

        </Icon>
      );
    };
    TrackpadIcon.displayName = 'TrackpadIcon';
      