import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CheckerboardIcon: FC<IconInterface> = function CheckerboardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckerboardIcon ${className}`;
      return (
        <Icon alt="Checkerboard" className={classNames} {...propsRest}>
          <path d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z" />

        </Icon>
      );
    };
    CheckerboardIcon.displayName = 'CheckerboardIcon';
      