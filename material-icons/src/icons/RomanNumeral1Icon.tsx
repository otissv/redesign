import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RomanNumeral1Icon: FC<IconInterface> = function RomanNumeral1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `RomanNumeral1Icon ${className}`;
      return (
        <Icon alt="RomanNumeral1" className={classNames} {...propsRest}>
          <path d="M14 7V9H13V15H14V17H10V15H11V9H10V7H14Z" />

        </Icon>
      );
    };
    RomanNumeral1Icon.displayName = 'RomanNumeral1Icon';
      