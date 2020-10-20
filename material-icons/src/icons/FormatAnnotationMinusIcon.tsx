import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatAnnotationMinusIcon: FC<IconInterface> = function FormatAnnotationMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatAnnotationMinusIcon ${className}`;
      return (
        <Icon alt="FormatAnnotationMinus" className={classNames} {...propsRest}>
          <path d="M10.5,7H8.5L3,21H5.2L6.3,18H12.5L13.6,21H16L10.5,7M7.1,16L9.5,9.7L11.9,16H7.1M22,7H14V5H22V7Z" />

        </Icon>
      );
    };
    FormatAnnotationMinusIcon.displayName = 'FormatAnnotationMinusIcon';
      