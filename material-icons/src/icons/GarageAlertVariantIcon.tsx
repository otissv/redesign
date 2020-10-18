import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GarageAlertVariantIcon: FC<IconInterface> = function GarageAlertVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GarageAlertVariantIcon ${className}`;
      return (
        <Icon alt="GarageAlertVariant" className={classNames} {...propsRest}>
          <path d="M20 9V20H18V11H2V20H0V9L10 5L20 9M17 12H3V14H17V12M17 15H3V17H17V15M22 15V10H24V15H22M22 19V17H24V19H22Z" />

        </Icon>
      );
    };
    GarageAlertVariantIcon.displayName = 'GarageAlertVariantIcon';
      