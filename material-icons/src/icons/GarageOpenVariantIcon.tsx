import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GarageOpenVariantIcon: FC<IconInterface> = function GarageOpenVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GarageOpenVariantIcon ${className}`;
      return (
        <Icon alt="GarageOpenVariant" className={classNames} {...propsRest}>
          <path d="M22 9V20H20V11H4V20H2V9L12 5L22 9M19 12H5V14H19V12Z" />

        </Icon>
      );
    };
    GarageOpenVariantIcon.displayName = 'GarageOpenVariantIcon';
      