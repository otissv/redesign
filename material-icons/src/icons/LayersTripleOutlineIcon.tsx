import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LayersTripleOutlineIcon: FC<IconInterface> = function LayersTripleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LayersTripleOutlineIcon ${className}`;
      return (
        <Icon alt="LayersTripleOutline" className={classNames} {...propsRest}>
          <path d="M12 16.54L19.37 10.8L21 12.07L12 19.07L3 12.07L4.62 10.81L12 16.54M12 14L3 7L12 0L21 7L12 14M12 2.53L6.26 7L12 11.47L17.74 7L12 2.53M12 21.47L19.37 15.73L21 17L12 24L3 17L4.62 15.74L12 21.47" />

        </Icon>
      );
    };
    LayersTripleOutlineIcon.displayName = 'LayersTripleOutlineIcon';
      