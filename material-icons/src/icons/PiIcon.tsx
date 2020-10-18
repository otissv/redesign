import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PiIcon: FC<IconInterface> = function PiIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PiIcon ${className}`;
      return (
        <Icon alt="Pi" className={classNames} {...propsRest}>
          <path d="M4,5V7H6V19H8V7H14V16A3,3 0 0,0 17,19A3,3 0 0,0 20,16H18A1,1 0 0,1 17,17A1,1 0 0,1 16,16V7H18V5" />

        </Icon>
      );
    };
    PiIcon.displayName = 'PiIcon';
      