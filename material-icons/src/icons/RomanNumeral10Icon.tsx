import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RomanNumeral10Icon: FC<IconInterface> = function RomanNumeral10Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral10Icon ${className}`;
      return (
        <Icon alt="RomanNumeral10" className={classNames} {...propsRest}>
          <path d="M9 7L11 12L9 17H11L12 14.5L13 17H15L13 12L15 7H13L12 9.5L11 7H9Z" />

        </Icon>
      );
    };
    RomanNumeral10Icon.displayName = 'RomanNumeral10Icon';
      