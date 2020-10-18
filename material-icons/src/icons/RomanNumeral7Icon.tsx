import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RomanNumeral7Icon: FC<IconInterface> = function RomanNumeral7Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral7Icon ${className}`;
      return (
        <Icon alt="RomanNumeral7" className={classNames} {...propsRest}>
          <path d="M4 7L6 17H8L10 7H8L7 12L6 7H4M15 7V9H14V15H15V17H11V15H12V9H11V7H15M20 7V9H19V15H20V17H16V15H17V9H16V7H20Z" />

        </Icon>
      );
    };
    RomanNumeral7Icon.displayName = 'RomanNumeral7Icon';
      