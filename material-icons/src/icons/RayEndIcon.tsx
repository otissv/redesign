import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RayEndIcon: FC<IconInterface> = function RayEndIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RayEndIcon ${className}`;
      return (
        <Icon alt="RayEnd" className={classNames} {...propsRest}>
          <path d="M20,9C18.69,9 17.58,9.83 17.17,11H2V13H17.17C17.58,14.17 18.69,15 20,15A3,3 0 0,0 23,12A3,3 0 0,0 20,9Z" />

        </Icon>
      );
    };
    RayEndIcon.displayName = 'RayEndIcon';
      