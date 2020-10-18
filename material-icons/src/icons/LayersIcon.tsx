import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LayersIcon: FC<IconInterface> = function LayersIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LayersIcon ${className}`;
      return (
        <Icon alt="Layers" className={classNames} {...propsRest}>
          <path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />

        </Icon>
      );
    };
    LayersIcon.displayName = 'LayersIcon';
      