import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FilterVariantIcon: FC<IconInterface> = function FilterVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FilterVariantIcon ${className}`;
      return (
        <Icon alt="FilterVariant" className={classNames} {...propsRest}>
          <path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z" />

        </Icon>
      );
    };
    FilterVariantIcon.displayName = 'FilterVariantIcon';
      