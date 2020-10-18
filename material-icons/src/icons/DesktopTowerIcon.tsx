import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DesktopTowerIcon: FC<IconInterface> = function DesktopTowerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DesktopTowerIcon ${className}`;
      return (
        <Icon alt="DesktopTower" className={classNames} {...propsRest}>
          <path d="M8,2H16A2,2 0 0,1 18,4V20A2,2 0 0,1 16,22H8A2,2 0 0,1 6,20V4A2,2 0 0,1 8,2M8,4V6H16V4H8M16,8H8V10H16V8M16,18H14V20H16V18Z" />

        </Icon>
      );
    };
    DesktopTowerIcon.displayName = 'DesktopTowerIcon';
      