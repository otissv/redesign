import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LabelVariantIcon: FC<IconInterface> = function LabelVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LabelVariantIcon ${className}`;
      return (
        <Icon alt="LabelVariant" className={classNames} {...propsRest}>
          <path d="M3.5,19L8.34,12L3.5,5H14.5C15.17,5 15.72,5.3 16.13,5.86L20.5,12L16.13,18.14C15.72,18.7 15.17,19 14.5,19H3.5Z" />

        </Icon>
      );
    };
    LabelVariantIcon.displayName = 'LabelVariantIcon';
      