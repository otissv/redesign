import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BowlMixIcon: FC<IconInterface> = function BowlMixIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BowlMixIcon ${className}`;
      return (
        <Icon alt="BowlMix" className={classNames} {...propsRest}>
          <path d="M16.2 11L20.3 4.5L22 5.5L18.6 11H16.2M15.6 12H2V15C2 18.9 5.1 22 9 22H15C18.9 22 22 18.9 22 15V12H15.6Z" />

        </Icon>
      );
    };
    BowlMixIcon.displayName = 'BowlMixIcon';
      