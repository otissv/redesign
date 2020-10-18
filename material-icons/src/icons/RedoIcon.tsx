import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RedoIcon: FC<IconInterface> = function RedoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RedoIcon ${className}`;
      return (
        <Icon alt="Redo" className={classNames} {...propsRest}>
          <path d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z" />

        </Icon>
      );
    };
    RedoIcon.displayName = 'RedoIcon';
      