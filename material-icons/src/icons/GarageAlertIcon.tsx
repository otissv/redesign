import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GarageAlertIcon: FC<IconInterface> = function GarageAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GarageAlertIcon ${className}`;
      return (
        <Icon alt="GarageAlert" className={classNames} {...propsRest}>
          <path d="M17,20H15V11H5V20H3V9L10,5L17,9V20M6,12H14V14H6V12M6,15H14V17H6V15M19,15V10H21V15H19M19,19V17H21V19H19Z" />

        </Icon>
      );
    };
    GarageAlertIcon.displayName = 'GarageAlertIcon';
      