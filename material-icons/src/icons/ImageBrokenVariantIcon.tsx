import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ImageBrokenVariantIcon: FC<IconInterface> = function ImageBrokenVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImageBrokenVariantIcon ${className}`;
      return (
        <Icon alt="ImageBrokenVariant" className={classNames} {...propsRest}>
          <path d="M21,5V11.59L18,8.58L14,12.59L10,8.59L6,12.59L3,9.58V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M18,11.42L21,14.43V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V12.42L6,15.41L10,11.41L14,15.41" />

        </Icon>
      );
    };
    ImageBrokenVariantIcon.displayName = 'ImageBrokenVariantIcon';
      