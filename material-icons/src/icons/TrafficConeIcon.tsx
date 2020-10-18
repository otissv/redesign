import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TrafficConeIcon: FC<IconInterface> = function TrafficConeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrafficConeIcon ${className}`;
      return (
        <Icon alt="TrafficCone" className={classNames} {...propsRest}>
          <path d="M17 15L18 19H21V22H3V19H6L7 15H17M15 8L16 12H8L9 8H15M13 1L14 5H10L11 1H13Z" />

        </Icon>
      );
    };
    TrafficConeIcon.displayName = 'TrafficConeIcon';
      