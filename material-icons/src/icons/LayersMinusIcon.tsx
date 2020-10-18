import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LayersMinusIcon: FC<IconInterface> = function LayersMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LayersMinusIcon ${className}`;
      return (
        <Icon alt="LayersMinus" className={classNames} {...propsRest}>
          <path d="M22,17V19H14V17H22M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z" />

        </Icon>
      );
    };
    LayersMinusIcon.displayName = 'LayersMinusIcon';
      