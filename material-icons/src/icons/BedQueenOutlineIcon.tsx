import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BedQueenOutlineIcon: FC<IconInterface> = function BedQueenOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BedQueenOutlineIcon ${className}`;
      return (
        <Icon alt="BedQueenOutline" className={classNames} {...propsRest}>
          <path d="M19 10V7A2 2 0 0 0 17 5H7A2 2 0 0 0 5 7V10A2 2 0 0 0 3 12V17H4.33L5 19H6L6.67 17H17.33L18 19H19L19.67 17H21V12A2 2 0 0 0 19 10M7 7H17V10H7M19 15H5V12H19Z" />

        </Icon>
      );
    };
    BedQueenOutlineIcon.displayName = 'BedQueenOutlineIcon';
      