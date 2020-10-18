import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ToyBrickMinusIcon: FC<IconInterface> = function ToyBrickMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToyBrickMinusIcon ${className}`;
      return (
        <Icon alt="ToyBrickMinus" className={classNames} {...propsRest}>
          <path d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H13V16H21V6M23 20H15V18H23Z" />

        </Icon>
      );
    };
    ToyBrickMinusIcon.displayName = 'ToyBrickMinusIcon';
      