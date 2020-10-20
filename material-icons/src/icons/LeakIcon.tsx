import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LeakIcon: FC<IconInterface> = function LeakIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LeakIcon ${className}`;
      return (
        <Icon alt="Leak" className={classNames} {...propsRest}>
          <path d="M6,3H3V6A3,3 0 0,0 6,3M14,3H12A9,9 0 0,1 3,12V14C9.08,14 14,9.07 14,3M10,3H8A5,5 0 0,1 3,8V10A7,7 0 0,0 10,3M10,21H12A9,9 0 0,1 21,12V10A11,11 0 0,0 10,21M18,21H21V18A3,3 0 0,0 18,21M14,21H16A5,5 0 0,1 21,16V14A7,7 0 0,0 14,21Z" />

        </Icon>
      );
    };
    LeakIcon.displayName = 'LeakIcon';
      