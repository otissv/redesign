import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BedQueenIcon: FC<IconInterface> = function BedQueenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BedQueenIcon ${className}`;
      return (
        <Icon alt="BedQueen" className={classNames} {...propsRest}>
          <path d="M19 10V7A2 2 0 0 0 17 5H7A2 2 0 0 0 5 7V10A2 2 0 0 0 3 12V17H4.33L5 19H6L6.67 17H17.33L18 19H19L19.67 17H21V12A2 2 0 0 0 19 10M17 10H7V7H17Z" />

        </Icon>
      );
    };
    BedQueenIcon.displayName = 'BedQueenIcon';
      