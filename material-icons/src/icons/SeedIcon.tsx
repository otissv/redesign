import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SeedIcon: FC<IconInterface> = function SeedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SeedIcon ${className}`;
      return (
        <Icon alt="Seed" className={classNames} {...propsRest}>
          <path d="M20.7,3.3C20.7,3.3 19.3,3 17.2,3C11.7,3 1.6,5.1 3.2,20.8C4.3,20.9 5.4,21 6.4,21C24.3,21 20.7,3.3 20.7,3.3M7,17C7,17 7,7 17,7C17,7 11,9 7,17Z" />

        </Icon>
      );
    };
    SeedIcon.displayName = 'SeedIcon';
      