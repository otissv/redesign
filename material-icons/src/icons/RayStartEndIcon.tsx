import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RayStartEndIcon: FC<IconInterface> = function RayStartEndIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RayStartEndIcon ${className}`;
      return (
        <Icon alt="RayStartEnd" className={classNames} {...propsRest}>
          <path d="M4,9C5.31,9 6.42,9.83 6.83,11H17.17C17.58,9.83 18.69,9 20,9A3,3 0 0,1 23,12A3,3 0 0,1 20,15C18.69,15 17.58,14.17 17.17,13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9Z" />

        </Icon>
      );
    };
    RayStartEndIcon.displayName = 'RayStartEndIcon';
      