import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DipSwitchIcon: FC<IconInterface> = function DipSwitchIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DipSwitchIcon ${className}`;
      return (
        <Icon alt="DipSwitch" className={classNames} {...propsRest}>
          <path d="M3,4H7A1,1 0 0,1 8,5V19A1,1 0 0,1 7,20H3A1,1 0 0,1 2,19V5A1,1 0 0,1 3,4M10,4H14A1,1 0 0,1 15,5V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V5A1,1 0 0,1 10,4M17,4H21A1,1 0 0,1 22,5V19A1,1 0 0,1 21,20H17A1,1 0 0,1 16,19V5A1,1 0 0,1 17,4M4,18H6V13H4V18M11,11H13V6H11V11M18,18H20V13H18V18Z" />

        </Icon>
      );
    };
    DipSwitchIcon.displayName = 'DipSwitchIcon';
      