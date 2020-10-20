import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BowTieIcon: FC<IconInterface> = function BowTieIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BowTieIcon ${className}`;
      return (
        <Icon alt="BowTie" className={classNames} {...propsRest}>
          <path d="M15,14L21,17V7L15,10V14M9,14L3,17V7L9,10V14M10,10H14V14H10V10Z" />

        </Icon>
      );
    };
    BowTieIcon.displayName = 'BowTieIcon';
      