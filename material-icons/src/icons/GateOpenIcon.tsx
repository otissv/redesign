import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GateOpenIcon: FC<IconInterface> = function GateOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GateOpenIcon ${className}`;
      return (
        <Icon alt="GateOpen" className={classNames} {...propsRest}>
          <path d="M7 20V6H5V10H3V8H1V20H3V18H5V20H7M3 16V12H5V16H3M21 8V10H19V6H17V20H19V18H21V20H23V8H21M21 16H19V12H21V16Z" />

        </Icon>
      );
    };
    GateOpenIcon.displayName = 'GateOpenIcon';
      