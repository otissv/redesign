import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RomanNumeral3Icon: FC<IconInterface> = function RomanNumeral3Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral3Icon ${className}`;
      return (
        <Icon alt="RomanNumeral3" className={classNames} {...propsRest}>
          <path d="M9 7V9H8V15H9V17H5V15H6V9H5V7H9M14 7V9H13V15H14V17H10V15H11V9H10V7H14M19 7V9H18V15H19V17H15V15H16V9H15V7H19Z" />

        </Icon>
      );
    };
    RomanNumeral3Icon.displayName = 'RomanNumeral3Icon';
      