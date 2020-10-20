import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EggIcon: FC<IconInterface> = function EggIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EggIcon ${className}`;
      return (
        <Icon alt="Egg" className={classNames} {...propsRest}>
          <path d="M19.5,14.5A7.5,7.5 0 0,1 12,22A7.5,7.5 0 0,1 4.5,14.5C4.5,10.36 7.86,2 12,2C16.14,2 19.5,10.36 19.5,14.5Z" />

        </Icon>
      );
    };
    EggIcon.displayName = 'EggIcon';
      