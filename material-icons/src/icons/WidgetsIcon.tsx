import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WidgetsIcon: FC<IconInterface> = function WidgetsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WidgetsIcon ${className}`;
      return (
        <Icon alt="Widgets" className={classNames} {...propsRest}>
          <path d="M3,3H11V7.34L16.66,1.69L22.31,7.34L16.66,13H21V21H13V13H16.66L11,7.34V11H3V3M3,13H11V21H3V13Z" />

        </Icon>
      );
    };
    WidgetsIcon.displayName = 'WidgetsIcon';
      