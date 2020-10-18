import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SimAlertIcon: FC<IconInterface> = function SimAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SimAlertIcon ${className}`;
      return (
        <Icon alt="SimAlert" className={classNames} {...propsRest}>
          <path d="M13,13H11V8H13M13,17H11V15H13M18,2H10L4,8V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z" />

        </Icon>
      );
    };
    SimAlertIcon.displayName = 'SimAlertIcon';
      