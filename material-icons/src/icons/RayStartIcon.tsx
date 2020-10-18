import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RayStartIcon: FC<IconInterface> = function RayStartIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RayStartIcon ${className}`;
      return (
        <Icon alt="RayStart" className={classNames} {...propsRest}>
          <path d="M4,9C5.31,9 6.42,9.83 6.83,11H22V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9Z" />

        </Icon>
      );
    };
    RayStartIcon.displayName = 'RayStartIcon';
      