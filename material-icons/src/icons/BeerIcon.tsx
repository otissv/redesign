import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BeerIcon: FC<IconInterface> = function BeerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BeerIcon ${className}`;
      return (
        <Icon alt="Beer" className={classNames} {...propsRest}>
          <path d="M4,2H19L17,22H6L4,2M6.2,4L7.8,20H8.8L7.43,6.34C8.5,6 9.89,5.89 11,7C12.56,8.56 15.33,7.69 16.5,7.23L16.8,4H6.2Z" />

        </Icon>
      );
    };
    BeerIcon.displayName = 'BeerIcon';
      