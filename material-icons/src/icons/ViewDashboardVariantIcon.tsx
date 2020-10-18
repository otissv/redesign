import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewDashboardVariantIcon: FC<IconInterface> = function ViewDashboardVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewDashboardVariantIcon ${className}`;
      return (
        <Icon alt="ViewDashboardVariant" className={classNames} {...propsRest}>
          <path d="M2,5V19H8V5H2M9,5V10H15V5H9M16,5V14H22V5H16M9,11V19H15V11H9M16,15V19H22V15H16Z" />

        </Icon>
      );
    };
    ViewDashboardVariantIcon.displayName = 'ViewDashboardVariantIcon';
      