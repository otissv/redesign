import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ValveOpenIcon: FC<IconInterface> = function ValveOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ValveOpenIcon ${className}`;
      return (
        <Icon alt="ValveOpen" className={classNames} {...propsRest}>
          <path d="M4 22H2V2H4M22 2H20V22H22M11 4V9.18A3 3 0 0 0 11 14.82V20H13V14.82A3 3 0 0 0 13 9.18V4Z" />

        </Icon>
      );
    };
    ValveOpenIcon.displayName = 'ValveOpenIcon';
      