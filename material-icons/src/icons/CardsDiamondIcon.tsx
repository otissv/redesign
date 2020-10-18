import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CardsDiamondIcon: FC<IconInterface> = function CardsDiamondIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CardsDiamondIcon ${className}`;
      return (
        <Icon alt="CardsDiamond" className={classNames} {...propsRest}>
          <path d="M19,12L12,22L5,12L12,2" />

        </Icon>
      );
    };
    CardsDiamondIcon.displayName = 'CardsDiamondIcon';
      