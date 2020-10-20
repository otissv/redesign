import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Dice2OutlineIcon: FC<IconInterface> = function Dice2OutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Dice2OutlineIcon ${className}`;
      return (
        <Icon alt="Dice2Outline" className={classNames} {...propsRest}>
          <path d="M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6M16.5 15C15.67 15 15 15.67 15 16.5C15 17.33 15.67 18 16.5 18C17.33 18 18 17.33 18 16.5C18 15.67 17.33 15 16.5 15Z" />

        </Icon>
      );
    };
    Dice2OutlineIcon.displayName = 'Dice2OutlineIcon';
      