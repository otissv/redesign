import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PotOutlineIcon: FC<IconInterface> = function PotOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PotOutlineIcon ${className}`;
      return (
        <Icon alt="PotOutline" className={classNames} {...propsRest}>
          <path d="M3 10V12H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V12H21V10H3M7 12H17V19H7V12Z" />

        </Icon>
      );
    };
    PotOutlineIcon.displayName = 'PotOutlineIcon';
      