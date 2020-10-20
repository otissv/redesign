import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MenuLeftOutlineIcon: FC<IconInterface> = function MenuLeftOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MenuLeftOutlineIcon ${className}`;
      return (
        <Icon alt="MenuLeftOutline" className={classNames} {...propsRest}>
          <path d="M15,18H13.5L7.5,12L13.5,6H15V18M10.33,12L13,14.67V9.33L10.33,12Z" />

        </Icon>
      );
    };
    MenuLeftOutlineIcon.displayName = 'MenuLeftOutlineIcon';
      