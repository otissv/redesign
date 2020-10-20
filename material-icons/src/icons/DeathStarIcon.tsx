import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DeathStarIcon: FC<IconInterface> = function DeathStarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeathStarIcon ${className}`;
      return (
        <Icon alt="DeathStar" className={classNames} {...propsRest}>
          <path d="M2.05,13H21.95C21.45,18.05 17.19,22 12,22C6.82,22 2.55,18.05 2.05,13M21.95,11H2.05C2.55,5.95 6.82,2 12,2C17.18,2 21.45,5.95 21.95,11M12,6.75A2.5,2.5 0 0,0 9.5,4.25A2.5,2.5 0 0,0 7,6.75A2.5,2.5 0 0,0 9.5,9.25A2.5,2.5 0 0,0 12,6.75Z" />

        </Icon>
      );
    };
    DeathStarIcon.displayName = 'DeathStarIcon';
      