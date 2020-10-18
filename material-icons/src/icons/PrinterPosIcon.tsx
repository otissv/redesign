import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PrinterPosIcon: FC<IconInterface> = function PrinterPosIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PrinterPosIcon ${className}`;
      return (
        <Icon alt="PrinterPos" className={classNames} {...propsRest}>
          <path d="M18 10H6A2 2 0 0 0 4 12V19H20V12A2 2 0 0 0 18 10M18 14H14V12H18M17 9H7V4H17Z" />

        </Icon>
      );
    };
    PrinterPosIcon.displayName = 'PrinterPosIcon';
      