import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PiBoxIcon: FC<IconInterface> = function PiBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PiBoxIcon ${className}`;
      return (
        <Icon alt="PiBox" className={classNames} {...propsRest}>
          <path d="M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M6,7H17V9H15V14A1,1 0 0,0 16,15A1,1 0 0,0 17,14H19A3,3 0 0,1 16,17A3,3 0 0,1 13,14V9H10V17H8V9H6" />

        </Icon>
      );
    };
    PiBoxIcon.displayName = 'PiBoxIcon';
      