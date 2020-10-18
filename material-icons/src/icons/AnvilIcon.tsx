import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AnvilIcon: FC<IconInterface> = function AnvilIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AnvilIcon ${className}`;
      return (
        <Icon alt="Anvil" className={classNames} {...propsRest}>
          <path d="M9,5V10C13.03,12.47 8.44,14.97 6,16V19H21V16C14.59,13.27 17.47,9 22,8V5H9M2,6C2.81,8.13 4.42,9.5 7,10V6H2Z" />

        </Icon>
      );
    };
    AnvilIcon.displayName = 'AnvilIcon';
      