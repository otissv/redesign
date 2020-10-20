import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LayersPlusIcon: FC<IconInterface> = function LayersPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LayersPlusIcon ${className}`;
      return (
        <Icon alt="LayersPlus" className={classNames} {...propsRest}>
          <path d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z" />

        </Icon>
      );
    };
    LayersPlusIcon.displayName = 'LayersPlusIcon';
      