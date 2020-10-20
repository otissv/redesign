import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ServerMinusIcon: FC<IconInterface> = function ServerMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ServerMinusIcon ${className}`;
      return (
        <Icon alt="ServerMinus" className={classNames} {...propsRest}>
          <path d="M4,4H20A1,1 0 0,1 21,5V9A1,1 0 0,1 20,10H4A1,1 0 0,1 3,9V5A1,1 0 0,1 4,4M9,8H10V6H9V8M5,6V8H7V6H5M8,16H16V18H8V16Z" />

        </Icon>
      );
    };
    ServerMinusIcon.displayName = 'ServerMinusIcon';
      