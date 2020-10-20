import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BorderRightVariantIcon: FC<IconInterface> = function BorderRightVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BorderRightVariantIcon ${className}`;
      return (
        <Icon alt="BorderRightVariant" className={classNames} {...propsRest}>
          <path d="M11,5H13V3H11M15,5H17V3H15M15,21H17V19H15M19,21H21V3H19M3,9H5V7H3M3,17H5V15H3M3,13H5V11H3M11,21H13V19H11M3,21H5V19H3M7,5H9V3H7M3,5H5V3H3M7,21H9V19H7V21Z" />

        </Icon>
      );
    };
    BorderRightVariantIcon.displayName = 'BorderRightVariantIcon';
      