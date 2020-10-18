import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SortVariantIcon: FC<IconInterface> = function SortVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SortVariantIcon ${className}`;
      return (
        <Icon alt="SortVariant" className={classNames} {...propsRest}>
          <path d="M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z" />

        </Icon>
      );
    };
    SortVariantIcon.displayName = 'SortVariantIcon';
      