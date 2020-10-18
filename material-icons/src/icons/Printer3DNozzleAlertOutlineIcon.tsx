import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Printer3DNozzleAlertOutlineIcon: FC<IconInterface> = function Printer3DNozzleAlertOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Printer3DNozzleAlertOutlineIcon ${className}`;
      return (
        <Icon alt="Printer3DNozzleAlertOutline" className={classNames} {...propsRest}>
          <path d="M7 2H17V7H19V13H16.5L13 17H11L7.5 13H5V7H7V2M10 22H2V20H10C10.55 20 11 19.55 11 19V18H13V19C13 20.66 11.66 22 10 22M7 9V11H8.5L12 15L15.5 11H17V9H15V4H9V9H7M21 12V7H23V12H21M21 16V14H23V16H21Z" />

        </Icon>
      );
    };
    Printer3DNozzleAlertOutlineIcon.displayName = 'Printer3DNozzleAlertOutlineIcon';
      