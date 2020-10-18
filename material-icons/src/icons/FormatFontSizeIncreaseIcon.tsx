import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatFontSizeIncreaseIcon: FC<IconInterface> = function FormatFontSizeIncreaseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatFontSizeIncreaseIcon ${className}`;
      return (
        <Icon alt="FormatFontSizeIncrease" className={classNames} {...propsRest}>
          <path d="M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,7L13,12.07L14.41,13.5L17,10.9V17H19V10.9L21.59,13.5L23,12.07L18,7Z" />

        </Icon>
      );
    };
    FormatFontSizeIncreaseIcon.displayName = 'FormatFontSizeIncreaseIcon';
      