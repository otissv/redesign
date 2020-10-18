import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeMinusIcon: FC<IconInterface> = function HomeMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeMinusIcon ${className}`;
      return (
        <Icon alt="HomeMinus" className={classNames} {...propsRest}>
          <path d="M12,3L2,12H5V20H19V12H22L12,3M16,13V15H8V13H16Z" />

        </Icon>
      );
    };
    HomeMinusIcon.displayName = 'HomeMinusIcon';
      