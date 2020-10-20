import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MenuRightIcon: FC<IconInterface> = function MenuRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MenuRightIcon ${className}`;
      return (
        <Icon alt="MenuRight" className={classNames} {...propsRest}>
          <path d="M10,17L15,12L10,7V17Z" />

        </Icon>
      );
    };
    MenuRightIcon.displayName = 'MenuRightIcon';
      