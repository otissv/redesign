import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BoomerangIcon: FC<IconInterface> = function BoomerangIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BoomerangIcon ${className}`;
      return (
        <Icon alt="Boomerang" className={classNames} {...propsRest}>
          <path d="M10 2H4C2.9 2 2 2.9 2 4S2.9 6 4 6H8L10 2M18 2C20.2 2 22 3.8 22 6V12L18 14C18 9.6 14.4 6 10 6L12 2H18M18 20V16L22 14V20C22 21.1 21.1 22 20 22S18 21.1 18 20Z" />

        </Icon>
      );
    };
    BoomerangIcon.displayName = 'BoomerangIcon';
      