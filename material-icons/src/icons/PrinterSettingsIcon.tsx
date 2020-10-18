import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PrinterSettingsIcon: FC<IconInterface> = function PrinterSettingsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PrinterSettingsIcon ${className}`;
      return (
        <Icon alt="PrinterSettings" className={classNames} {...propsRest}>
          <path d="M18,2V6H6V2H18M19,11A1,1 0 0,0 20,10A1,1 0 0,0 19,9A1,1 0 0,0 18,10A1,1 0 0,0 19,11M16,18V13H8V18H16M19,7A3,3 0 0,1 22,10V16H18V20H6V16H2V10A3,3 0 0,1 5,7H19M15,24V22H17V24H15M11,24V22H13V24H11M7,24V22H9V24H7Z" />

        </Icon>
      );
    };
    PrinterSettingsIcon.displayName = 'PrinterSettingsIcon';
      