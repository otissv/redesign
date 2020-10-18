import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MenuOpenIcon: FC<IconInterface> = function MenuOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MenuOpenIcon ${className}`;
      return (
        <Icon alt="MenuOpen" className={classNames} {...propsRest}>
          <path d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" />

        </Icon>
      );
    };
    MenuOpenIcon.displayName = 'MenuOpenIcon';
      