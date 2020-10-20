import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CellphoneSettingsIcon: FC<IconInterface> = function CellphoneSettingsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneSettingsIcon ${className}`;
      return (
        <Icon alt="CellphoneSettings" className={classNames} {...propsRest}>
          <path d="M16,16H8V4H16M16,0H8A2,2 0 0,0 6,2V18A2,2 0 0,0 8,20H16A2,2 0 0,0 18,18V2A2,2 0 0,0 16,0M15,24H17V22H15M11,24H13V22H11M7,24H9V22H7V24Z" />

        </Icon>
      );
    };
    CellphoneSettingsIcon.displayName = 'CellphoneSettingsIcon';
      