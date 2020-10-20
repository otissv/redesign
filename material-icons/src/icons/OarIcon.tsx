import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const OarIcon: FC<IconInterface> = function OarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `OarIcon ${className}`;
      return (
        <Icon alt="Oar" className={classNames} {...propsRest}>
          <path d="M20.23,15.21C18.77,13.75 14.97,10.2 12.77,11.27L4.5,3L3,4.5L11.28,12.79C10.3,15 13.88,18.62 15.35,20.08C17.11,21.84 18.26,20.92 19.61,19.57C21.1,18.08 21.61,16.61 20.23,15.21Z" />

        </Icon>
      );
    };
    OarIcon.displayName = 'OarIcon';
      