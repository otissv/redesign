import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PotIcon: FC<IconInterface> = function PotIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PotIcon ${className}`;
      return (
        <Icon alt="Pot" className={classNames} {...propsRest}>
          <path d="M19 19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V12H3V10H21V12H19V19Z" />

        </Icon>
      );
    };
    PotIcon.displayName = 'PotIcon';
      