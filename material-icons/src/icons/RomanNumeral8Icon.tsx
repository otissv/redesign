import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RomanNumeral8Icon: FC<IconInterface> = function RomanNumeral8Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral8Icon ${className}`;
      return (
        <Icon alt="RomanNumeral8" className={classNames} {...propsRest}>
          <path d="M1 7L3 17H5L7 7H5L4 12L3 7H1M12 7V9H11V15H12V17H8V15H9V9H8V7H12M17 7V9H16V15H17V17H13V15H14V9H13V7H17M22 7V9H21V15H22V17H18V15H19V9H18V7H22Z" />

        </Icon>
      );
    };
    RomanNumeral8Icon.displayName = 'RomanNumeral8Icon';
      