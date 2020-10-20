import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewDashboardVariantOutlineIcon: FC<IconInterface> = function ViewDashboardVariantOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewDashboardVariantOutlineIcon ${className}`;
      return (
        <Icon alt="ViewDashboardVariantOutline" className={classNames} {...propsRest}>
          <path d="M2 5V19H22V5H2M20 12H16V7H20V12M14 10H10V7H14V10M10 12H14V17H10V12M4 7H8V17H4V7M16 17V14H20V17H16Z" />

        </Icon>
      );
    };
    ViewDashboardVariantOutlineIcon.displayName = 'ViewDashboardVariantOutlineIcon';
      