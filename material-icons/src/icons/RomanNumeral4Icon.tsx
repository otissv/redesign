import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RomanNumeral4Icon: FC<IconInterface> = function RomanNumeral4Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral4Icon ${className}`;
      return (
        <Icon alt="RomanNumeral4" className={classNames} {...propsRest}>
          <path d="M12 7L14 17H16L18 7H16L15 12L14 7H12M11 7V9H10V15H11V17H7V15H8V9H7V7H11Z" />

        </Icon>
      );
    };
    RomanNumeral4Icon.displayName = 'RomanNumeral4Icon';
      