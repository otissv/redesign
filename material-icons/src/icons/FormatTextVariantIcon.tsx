import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatTextVariantIcon: FC<IconInterface> = function FormatTextVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextVariantIcon ${className}`;
      return (
        <Icon alt="FormatTextVariant" className={classNames} {...propsRest}>
          <path d="M9.6,14L12,7.7L14.4,14M11,5L5.5,19H7.7L8.8,16H15L16.1,19H18.3L13,5H11Z" />

        </Icon>
      );
    };
    FormatTextVariantIcon.displayName = 'FormatTextVariantIcon';
      