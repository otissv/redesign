import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BowlIcon: FC<IconInterface> = function BowlIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BowlIcon ${className}`;
      return (
        <Icon alt="Bowl" className={classNames} {...propsRest}>
          <path d="M22 15C22 18.9 18.9 22 15 22H9C5.1 22 2 18.9 2 15V12H22V15Z" />

        </Icon>
      );
    };
    BowlIcon.displayName = 'BowlIcon';
      