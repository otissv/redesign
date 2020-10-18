import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MenuLeftIcon: FC<IconInterface> = function MenuLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MenuLeftIcon ${className}`;
      return (
        <Icon alt="MenuLeft" className={classNames} {...propsRest}>
          <path d="M14,7L9,12L14,17V7Z" />

        </Icon>
      );
    };
    MenuLeftIcon.displayName = 'MenuLeftIcon';
      