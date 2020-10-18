import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ToyBrickSearchIcon: FC<IconInterface> = function ToyBrickSearchIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToyBrickSearchIcon ${className}`;
      return (
        <Icon alt="ToyBrickSearch" className={classNames} {...propsRest}>
          <path d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H11.81A6.5 6.5 0 0 1 21 10.81V6M20.31 17.9A4.5 4.5 0 1 0 18.88 19.32L22 22.39L23.39 21M16.5 18A2.5 2.5 0 1 1 19 15.5A2.5 2.5 0 0 1 16.5 18Z" />

        </Icon>
      );
    };
    ToyBrickSearchIcon.displayName = 'ToyBrickSearchIcon';
      