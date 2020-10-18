import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PlusMinusVariantIcon: FC<IconInterface> = function PlusMinusVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlusMinusVariantIcon ${className}`;
      return (
        <Icon alt="PlusMinusVariant" className={classNames} {...propsRest}>
          <path d="M3 7H6V4H8V7H11V9H8V12H6V9H3V7M13 15H21V17H13V15M16.04 3H18.35L7.96 21H5.65L16.04 3Z" />

        </Icon>
      );
    };
    PlusMinusVariantIcon.displayName = 'PlusMinusVariantIcon';
      