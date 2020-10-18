import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FilterVariantMinusIcon: FC<IconInterface> = function FilterVariantMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FilterVariantMinusIcon ${className}`;
      return (
        <Icon alt="FilterVariantMinus" className={classNames} {...propsRest}>
          <path d="M21 8H3V6H21V8M13.81 16H10V18H13.09C13.21 17.28 13.46 16.61 13.81 16M18 11H6V13H18V11M23 18H15V20H23V18Z" />

        </Icon>
      );
    };
    FilterVariantMinusIcon.displayName = 'FilterVariantMinusIcon';
      