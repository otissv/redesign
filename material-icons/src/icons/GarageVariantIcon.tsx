import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GarageVariantIcon: FC<IconInterface> = function GarageVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GarageVariantIcon ${className}`;
      return (
        <Icon alt="GarageVariant" className={classNames} {...propsRest}>
          <path d="M22 9V20H20V11H4V20H2V9L12 5L22 9M19 12H5V14H19V12M19 18H5V20H19V18M19 15H5V17H19V15Z" />

        </Icon>
      );
    };
    GarageVariantIcon.displayName = 'GarageVariantIcon';
      