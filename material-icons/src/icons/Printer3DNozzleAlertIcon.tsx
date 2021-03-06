import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Printer3DNozzleAlertIcon: FC<IconInterface> = function Printer3DNozzleAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Printer3DNozzleAlertIcon ${className}`;
      return (
        <Icon alt="Printer3DNozzleAlert" className={classNames} {...propsRest}>
          <path d="M7 2H17V8H19V13H16.5L13 17H11L7.5 13H5V8H7V2M10 22H2V20H10C10.55 20 11 19.55 11 19V18H13V19C13 20.66 11.66 22 10 22M21 12V7H23V12H21M21 16V14H23V16H21Z" />

        </Icon>
      );
    };
    Printer3DNozzleAlertIcon.displayName = 'Printer3DNozzleAlertIcon';
      