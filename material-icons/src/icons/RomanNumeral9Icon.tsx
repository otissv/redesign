import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RomanNumeral9Icon: FC<IconInterface> = function RomanNumeral9Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral9Icon ${className}`;
      return (
        <Icon alt="RomanNumeral9" className={classNames} {...propsRest}>
          <path d="M11 7V9H10V15H11V17H7V15H8V9H7V7H11M12 7L14 12L12 17H14L15 14.5L16 17H18L16 12L18 7H16L15 9.5L14 7H12Z" />

        </Icon>
      );
    };
    RomanNumeral9Icon.displayName = 'RomanNumeral9Icon';
      