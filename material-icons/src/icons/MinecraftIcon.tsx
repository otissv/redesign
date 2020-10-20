import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MinecraftIcon: FC<IconInterface> = function MinecraftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MinecraftIcon ${className}`;
      return (
        <Icon alt="Minecraft" className={classNames} {...propsRest}>
          <path d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M6,6V10H10V12H8V18H10V16H14V18H16V12H14V10H18V6H14V10H10V6H6Z" />

        </Icon>
      );
    };
    MinecraftIcon.displayName = 'MinecraftIcon';
      