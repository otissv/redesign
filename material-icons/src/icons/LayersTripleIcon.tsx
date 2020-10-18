import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LayersTripleIcon: FC<IconInterface> = function LayersTripleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LayersTripleIcon ${className}`;
      return (
        <Icon alt="LayersTriple" className={classNames} {...propsRest}>
          <path d="M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0M19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73M19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z" />

        </Icon>
      );
    };
    LayersTripleIcon.displayName = 'LayersTripleIcon';
      