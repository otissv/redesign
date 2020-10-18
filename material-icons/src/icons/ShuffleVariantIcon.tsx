import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShuffleVariantIcon: FC<IconInterface> = function ShuffleVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShuffleVariantIcon ${className}`;
      return (
        <Icon alt="ShuffleVariant" className={classNames} {...propsRest}>
          <path d="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z" />

        </Icon>
      );
    };
    ShuffleVariantIcon.displayName = 'ShuffleVariantIcon';
      