import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StopIcon: FC<IconInterface> = function StopIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StopIcon ${className}`;
      return (
        <Icon alt="Stop" className={classNames} {...propsRest}>
          <path d="M18,18H6V6H18V18Z" />

        </Icon>
      );
    };
    StopIcon.displayName = 'StopIcon';
      