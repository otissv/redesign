import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RomanNumeral2Icon: FC<IconInterface> = function RomanNumeral2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral2Icon ${className}`;
      return (
        <Icon alt="RomanNumeral2" className={classNames} {...propsRest}>
          <path d="M11 7V9H10V15H11V17H7V15H8V9H7V7H11M17 7V9H16V15H17V17H13V15H14V9H13V7H17Z" />

        </Icon>
      );
    };
    RomanNumeral2Icon.displayName = 'RomanNumeral2Icon';
      