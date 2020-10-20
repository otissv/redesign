import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MoonWaningCrescentIcon: FC<IconInterface> = function MoonWaningCrescentIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoonWaningCrescentIcon ${className}`;
      return (
        <Icon alt="MoonWaningCrescent" className={classNames} {...propsRest}>
          <path d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />

        </Icon>
      );
    };
    MoonWaningCrescentIcon.displayName = 'MoonWaningCrescentIcon';
      