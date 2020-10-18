import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MenuRightOutlineIcon: FC<IconInterface> = function MenuRightOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MenuRightOutlineIcon ${className}`;
      return (
        <Icon alt="MenuRightOutline" className={classNames} {...propsRest}>
          <path d="M9,6H10.5L16.5,12L10.5,18H9V6M13.67,12L11,9.33V14.67L13.67,12Z" />

        </Icon>
      );
    };
    MenuRightOutlineIcon.displayName = 'MenuRightOutlineIcon';
      