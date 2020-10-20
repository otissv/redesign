import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PrinterAlertIcon: FC<IconInterface> = function PrinterAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PrinterAlertIcon ${className}`;
      return (
        <Icon alt="PrinterAlert" className={classNames} {...propsRest}>
          <path d="M14,4V8H6V4H14M15,13A1,1 0 0,0 16,12A1,1 0 0,0 15,11A1,1 0 0,0 14,12A1,1 0 0,0 15,13M13,19V15H7V19H13M15,9A3,3 0 0,1 18,12V17H15V21H5V17H2V12A3,3 0 0,1 5,9H15M22,7V12H20V7H22M22,14V16H20V14H22Z" />

        </Icon>
      );
    };
    PrinterAlertIcon.displayName = 'PrinterAlertIcon';
      