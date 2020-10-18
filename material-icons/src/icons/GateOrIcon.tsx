import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GateOrIcon: FC<IconInterface> = function GateOrIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GateOrIcon ${className}`;
      return (
        <Icon alt="GateOr" className={classNames} {...propsRest}>
          <path d="M2,4C5,10 5,14 2,20H8C13,20 19,16 22,12C19,8 13,4 8,4H2M5,6H8C11.5,6 16.3,9 19.3,12C16.3,15 11.5,18 8,18H5C6.4,13.9 6.4,10.1 5,6Z" />

        </Icon>
      );
    };
    GateOrIcon.displayName = 'GateOrIcon';
      