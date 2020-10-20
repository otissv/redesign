import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RoadIcon: FC<IconInterface> = function RoadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RoadIcon ${className}`;
      return (
        <Icon alt="Road" className={classNames} {...propsRest}>
          <path d="M11,16H13V20H11M11,10H13V14H11M11,4H13V8H11M4,22H20V2H4V22Z" />

        </Icon>
      );
    };
    RoadIcon.displayName = 'RoadIcon';
      