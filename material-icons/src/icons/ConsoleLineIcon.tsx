import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ConsoleLineIcon: FC<IconInterface> = function ConsoleLineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ConsoleLineIcon ${className}`;
      return (
        <Icon alt="ConsoleLine" className={classNames} {...propsRest}>
          <path d="M13,19V16H21V19H13M8.5,13L2.47,7H6.71L11.67,11.95C12.25,12.54 12.25,13.5 11.67,14.07L6.74,19H2.5L8.5,13Z" />

        </Icon>
      );
    };
    ConsoleLineIcon.displayName = 'ConsoleLineIcon';
      