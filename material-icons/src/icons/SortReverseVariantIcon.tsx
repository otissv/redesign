import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SortReverseVariantIcon: FC<IconInterface> = function SortReverseVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SortReverseVariantIcon ${className}`;
      return (
        <Icon alt="SortReverseVariant" className={classNames} {...propsRest}>
          <path d="M3 11H15V13H3M3 18V16H21V18M3 6H9V8H3Z" />

        </Icon>
      );
    };
    SortReverseVariantIcon.displayName = 'SortReverseVariantIcon';
      