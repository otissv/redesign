import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MenuSwapOutlineIcon: FC<IconInterface> = function MenuSwapOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MenuSwapOutlineIcon ${className}`;
      return (
        <Icon alt="MenuSwapOutline" className={classNames} {...propsRest}>
          <path d="M12,3.5L6,9.5V11H18V9.5L12,3.5M12,6.33L14.67,9H9.33L12,6.33M6,13V14.5L12,20.5L18,14.5V13H6M9.33,15H14.67L12,17.67L9.33,15Z" />

        </Icon>
      );
    };
    MenuSwapOutlineIcon.displayName = 'MenuSwapOutlineIcon';
      