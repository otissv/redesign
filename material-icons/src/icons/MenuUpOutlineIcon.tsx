import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MenuUpOutlineIcon: FC<IconInterface> = function MenuUpOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MenuUpOutlineIcon ${className}`;
      return (
        <Icon alt="MenuUpOutline" className={classNames} {...propsRest}>
          <path d="M18,16V14.5L12,8.5L6,14.5V16H18M12,11.33L14.67,14H9.33L12,11.33Z" />

        </Icon>
      );
    };
    MenuUpOutlineIcon.displayName = 'MenuUpOutlineIcon';
      