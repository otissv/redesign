import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Printer3DNozzleIcon: FC<IconInterface> = function Printer3DNozzleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Printer3DNozzleIcon ${className}`;
      return (
        <Icon alt="Printer3DNozzle" className={classNames} {...propsRest}>
          <path d="M7,2H17V8H19V13H16.5L13,17H11L7.5,13H5V8H7V2M10,22H2V20H10A1,1 0 0,0 11,19V18H13V19A3,3 0 0,1 10,22Z" />

        </Icon>
      );
    };
    Printer3DNozzleIcon.displayName = 'Printer3DNozzleIcon';
      