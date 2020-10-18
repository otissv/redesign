import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LayersOutlineIcon: FC<IconInterface> = function LayersOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LayersOutlineIcon ${className}`;
      return (
        <Icon alt="LayersOutline" className={classNames} {...propsRest}>
          <path d="M12,18.54L19.37,12.8L21,14.07L12,21.07L3,14.07L4.62,12.81L12,18.54M12,16L3,9L12,2L21,9L12,16M12,4.53L6.26,9L12,13.47L17.74,9L12,4.53Z" />

        </Icon>
      );
    };
    LayersOutlineIcon.displayName = 'LayersOutlineIcon';
      