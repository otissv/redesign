import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LocationExitIcon: FC<IconInterface> = function LocationExitIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LocationExitIcon ${className}`;
      return (
        <Icon alt="LocationExit" className={classNames} {...propsRest}>
          <path d="M22 12L18 8V11H10V13H18V16M20 18A10 10 0 1 1 20 6H17.27A8 8 0 1 0 17.27 18Z" />

        </Icon>
      );
    };
    LocationExitIcon.displayName = 'LocationExitIcon';
      