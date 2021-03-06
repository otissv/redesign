import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BedKingOutlineIcon: FC<IconInterface> = function BedKingOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BedKingOutlineIcon ${className}`;
      return (
        <Icon alt="BedKingOutline" className={classNames} {...propsRest}>
          <path d="M20 10V7A2 2 0 0 0 18 5H6A2 2 0 0 0 4 7V10A2 2 0 0 0 2 12V17H3.33L4 19H5L5.67 17H18.33L19 19H20L20.67 17H22V12A2 2 0 0 0 20 10M13 7H18V10H13M6 7H11V10H6M20 15H4V12H20Z" />

        </Icon>
      );
    };
    BedKingOutlineIcon.displayName = 'BedKingOutlineIcon';
      