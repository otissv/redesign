import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NotePlusOutlineIcon: FC<IconInterface> = function NotePlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NotePlusOutlineIcon ${className}`;
      return (
        <Icon alt="NotePlusOutline" className={classNames} {...propsRest}>
          <path d="M15,10H20.5L15,4.5V10M4,3H16L22,9V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V5C2,3.89 2.89,3 4,3M4,5V19H20V12H13V5H4M8,17V15H6V13H8V11H10V13H12V15H10V17H8Z" />

        </Icon>
      );
    };
    NotePlusOutlineIcon.displayName = 'NotePlusOutlineIcon';
      