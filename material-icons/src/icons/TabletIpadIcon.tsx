import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TabletIpadIcon: FC<IconInterface> = function TabletIpadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TabletIpadIcon ${className}`;
      return (
        <Icon alt="TabletIpad" className={classNames} {...propsRest}>
          <path d="M19,19H4V3H19M11.5,23A1.5,1.5 0 0,1 10,21.5A1.5,1.5 0 0,1 11.5,20A1.5,1.5 0 0,1 13,21.5A1.5,1.5 0 0,1 11.5,23M18.5,0H4.5A2.5,2.5 0 0,0 2,2.5V21.5A2.5,2.5 0 0,0 4.5,24H18.5A2.5,2.5 0 0,0 21,21.5V2.5A2.5,2.5 0 0,0 18.5,0Z" />

        </Icon>
      );
    };
    TabletIpadIcon.displayName = 'TabletIpadIcon';
      