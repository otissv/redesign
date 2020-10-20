import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WrapIcon: FC<IconInterface> = function WrapIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WrapIcon ${className}`;
      return (
        <Icon alt="Wrap" className={classNames} {...propsRest}>
          <path d="M21,5H3V7H21V5M3,19H10V17H3V19M3,13H18C19,13 20,13.43 20,15C20,16.57 19,17 18,17H16V15L12,18L16,21V19H18C20.95,19 22,17.73 22,15C22,12.28 21,11 18,11H3V13Z" />

        </Icon>
      );
    };
    WrapIcon.displayName = 'WrapIcon';
      