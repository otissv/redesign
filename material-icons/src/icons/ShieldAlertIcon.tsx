import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShieldAlertIcon: FC<IconInterface> = function ShieldAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShieldAlertIcon ${className}`;
      return (
        <Icon alt="ShieldAlert" className={classNames} {...propsRest}>
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5M11,7H13V13H11M11,15H13V17H11" />

        </Icon>
      );
    };
    ShieldAlertIcon.displayName = 'ShieldAlertIcon';
      