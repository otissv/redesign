import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RomanNumeral6Icon: FC<IconInterface> = function RomanNumeral6Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral6Icon ${className}`;
      return (
        <Icon alt="RomanNumeral6" className={classNames} {...propsRest}>
          <path d="M6 7L8 17H10L12 7H10L9 12L8 7H6M17 7V9H16V15H17V17H13V15H14V9H13V7H17Z" />

        </Icon>
      );
    };
    RomanNumeral6Icon.displayName = 'RomanNumeral6Icon';
      