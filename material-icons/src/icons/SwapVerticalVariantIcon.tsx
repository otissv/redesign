import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SwapVerticalVariantIcon: FC<IconInterface> = function SwapVerticalVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SwapVerticalVariantIcon ${className}`;
      return (
        <Icon alt="SwapVerticalVariant" className={classNames} {...propsRest}>
          <path d="M18,4L14,8H17V16A2,2 0 0,1 15,18A2,2 0 0,1 13,16V8A4,4 0 0,0 9,4A4,4 0 0,0 5,8V16H2L6,20L10,16H7V8A2,2 0 0,1 9,6A2,2 0 0,1 11,8V16A4,4 0 0,0 15,20A4,4 0 0,0 19,16V8H22L18,4Z" />

        </Icon>
      );
    };
    SwapVerticalVariantIcon.displayName = 'SwapVerticalVariantIcon';
      