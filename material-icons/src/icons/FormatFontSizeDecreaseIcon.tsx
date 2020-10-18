import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatFontSizeDecreaseIcon: FC<IconInterface> = function FormatFontSizeDecreaseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatFontSizeDecreaseIcon ${className}`;
      return (
        <Icon alt="FormatFontSizeDecrease" className={classNames} {...propsRest}>
          <path d="M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,17L23,11.93L21.59,10.5L19,13.1V7H17V13.1L14.41,10.5L13,11.93L18,17Z" />

        </Icon>
      );
    };
    FormatFontSizeDecreaseIcon.displayName = 'FormatFontSizeDecreaseIcon';
      