import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GarageIcon: FC<IconInterface> = function GarageIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GarageIcon ${className}`;
      return (
        <Icon alt="Garage" className={classNames} {...propsRest}>
          <path d="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z" />

        </Icon>
      );
    };
    GarageIcon.displayName = 'GarageIcon';
      