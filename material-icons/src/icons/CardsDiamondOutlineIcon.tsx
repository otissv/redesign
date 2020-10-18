import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CardsDiamondOutlineIcon: FC<IconInterface> = function CardsDiamondOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CardsDiamondOutlineIcon ${className}`;
      return (
        <Icon alt="CardsDiamondOutline" className={classNames} {...propsRest}>
          <path d="M12 2L5 12L12 22L19 12M7.44 12L12 5.5L16.56 12L12 18.5" />

        </Icon>
      );
    };
    CardsDiamondOutlineIcon.displayName = 'CardsDiamondOutlineIcon';
      