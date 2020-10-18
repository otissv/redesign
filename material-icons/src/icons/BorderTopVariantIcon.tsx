import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BorderTopVariantIcon: FC<IconInterface> = function BorderTopVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BorderTopVariantIcon ${className}`;
      return (
        <Icon alt="BorderTopVariant" className={classNames} {...propsRest}>
          <path d="M19,21H21V19H19M15,21H17V19H15M19,17H21V15H19M3,5H21V3H3M19,13H21V11H19M19,9H21V7H19M3,9H5V7H3M3,13H5V11H3M3,21H5V19H3M3,17H5V15H3M11,21H13V19H11M7,21H9V19H7V21Z" />

        </Icon>
      );
    };
    BorderTopVariantIcon.displayName = 'BorderTopVariantIcon';
      