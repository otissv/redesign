import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BorderAllVariantIcon: FC<IconInterface> = function BorderAllVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BorderAllVariantIcon ${className}`;
      return (
        <Icon alt="BorderAllVariant" className={classNames} {...propsRest}>
          <path d="M3,21V3H21V21H3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    BorderAllVariantIcon.displayName = 'BorderAllVariantIcon';
      