import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BowlOutlineIcon: FC<IconInterface> = function BowlOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BowlOutlineIcon ${className}`;
      return (
        <Icon alt="BowlOutline" className={classNames} {...propsRest}>
          <path d="M2 12V15C2 18.9 5.1 22 9 22H15C18.9 22 22 18.9 22 15V12H2M4 14H20V15C20 17.8 17.8 20 15 20H9C6.2 20 4 17.8 4 15V14Z" />

        </Icon>
      );
    };
    BowlOutlineIcon.displayName = 'BowlOutlineIcon';
      