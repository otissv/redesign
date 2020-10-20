import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const KnifeMilitaryIcon: FC<IconInterface> = function KnifeMilitaryIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KnifeMilitaryIcon ${className}`;
      return (
        <Icon alt="KnifeMilitary" className={classNames} {...propsRest}>
          <path d="M22,2L17.39,3.75L10.46,10.68L14,14.22L20.92,7.29C22.43,5.78 22,2 22,2M8.33,10L6.92,11.39L8.33,12.8L2.68,18.46L6.21,22L11.87,16.34L13.28,17.76L14.7,16.34L8.33,10Z" />

        </Icon>
      );
    };
    KnifeMilitaryIcon.displayName = 'KnifeMilitaryIcon';
      