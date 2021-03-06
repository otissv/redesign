import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DirectionsForkIcon: FC<IconInterface> = function DirectionsForkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DirectionsForkIcon ${className}`;
      return (
        <Icon alt="DirectionsFork" className={classNames} {...propsRest}>
          <path d="M3,4V12.5L6,9.5L9,13C10,14 10,15 10,15V21H14V14C14,14 14,13 13.47,12C12.94,11 12,10 12,10L9,6.58L11.5,4M18,4L13.54,8.47L14,9C14,9 14.93,10 15.47,11C15.68,11.4 15.8,11.79 15.87,12.13L21,7" />

        </Icon>
      );
    };
    DirectionsForkIcon.displayName = 'DirectionsForkIcon';
      