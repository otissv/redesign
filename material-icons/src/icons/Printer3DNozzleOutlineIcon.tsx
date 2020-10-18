import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Printer3DNozzleOutlineIcon: FC<IconInterface> = function Printer3DNozzleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Printer3DNozzleOutlineIcon ${className}`;
      return (
        <Icon alt="Printer3DNozzleOutline" className={classNames} {...propsRest}>
          <path d="M7,2H17V7H19V13H16.5L13,17H11L7.5,13H5V7H7V2M10,22H2V20H10A1,1 0 0,0 11,19V18H13V19A3,3 0 0,1 10,22M7,9V11H8.5L12,15L15.5,11H17V9H15V4H9V9H7Z" />

        </Icon>
      );
    };
    Printer3DNozzleOutlineIcon.displayName = 'Printer3DNozzleOutlineIcon';
      