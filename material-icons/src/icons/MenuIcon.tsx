import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MenuIcon: FC<IconInterface> = function MenuIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MenuIcon ${className}`;
      return (
        <Icon alt="Menu" className={classNames} {...propsRest}>
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />

        </Icon>
      );
    };
    MenuIcon.displayName = 'MenuIcon';
      