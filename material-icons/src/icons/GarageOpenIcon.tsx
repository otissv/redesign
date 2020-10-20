import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GarageOpenIcon: FC<IconInterface> = function GarageOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GarageOpenIcon ${className}`;
      return (
        <Icon alt="GarageOpen" className={classNames} {...propsRest}>
          <path d="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12Z" />

        </Icon>
      );
    };
    GarageOpenIcon.displayName = 'GarageOpenIcon';
      