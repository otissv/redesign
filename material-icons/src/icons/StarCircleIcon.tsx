import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StarCircleIcon: FC<IconInterface> = function StarCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StarCircleIcon ${className}`;
      return (
        <Icon alt="StarCircle" className={classNames} {...propsRest}>
          <path d="M16.23,18L12,15.45L7.77,18L8.89,13.19L5.16,9.96L10.08,9.54L12,5L13.92,9.53L18.84,9.95L15.11,13.18L16.23,18M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    StarCircleIcon.displayName = 'StarCircleIcon';
      