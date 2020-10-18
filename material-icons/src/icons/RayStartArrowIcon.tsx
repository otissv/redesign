import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RayStartArrowIcon: FC<IconInterface> = function RayStartArrowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RayStartArrowIcon ${className}`;
      return (
        <Icon alt="RayStartArrow" className={classNames} {...propsRest}>
          <path d="M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z" />

        </Icon>
      );
    };
    RayStartArrowIcon.displayName = 'RayStartArrowIcon';
      