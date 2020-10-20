import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FaxIcon: FC<IconInterface> = function FaxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FaxIcon ${className}`;
      return (
        <Icon alt="Fax" className={classNames} {...propsRest}>
          <path d="M11,6H16V8H11V6M8,9V3H19V9A3,3 0 0,1 22,12V18H19V21H8V18H7V9H8M10,5V9H17V5H10M10,15V19H17V15H10M19,11A1,1 0 0,0 18,12A1,1 0 0,0 19,13A1,1 0 0,0 20,12A1,1 0 0,0 19,11M4,9H5A1,1 0 0,1 6,10V17A1,1 0 0,1 5,18H4A2,2 0 0,1 2,16V11A2,2 0 0,1 4,9Z" />

        </Icon>
      );
    };
    FaxIcon.displayName = 'FaxIcon';
      