import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TrayMinusIcon: FC<IconInterface> = function TrayMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrayMinusIcon ${className}`;
      return (
        <Icon alt="TrayMinus" className={classNames} {...propsRest}>
          <path d="M16 10H8V8H16M2 17A2 2 0 0 0 4 19H20A2 2 0 0 0 22 17V12H20V17H4V12H2Z" />

        </Icon>
      );
    };
    TrayMinusIcon.displayName = 'TrayMinusIcon';
      