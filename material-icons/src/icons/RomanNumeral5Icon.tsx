import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RomanNumeral5Icon: FC<IconInterface> = function RomanNumeral5Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral5Icon ${className}`;
      return (
        <Icon alt="RomanNumeral5" className={classNames} {...propsRest}>
          <path d="M9 7L11 17H13L15 7H13L12 12L11 7H9Z" />

        </Icon>
      );
    };
    RomanNumeral5Icon.displayName = 'RomanNumeral5Icon';
      