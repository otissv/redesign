import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LayersRemoveIcon: FC<IconInterface> = function LayersRemoveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LayersRemoveIcon ${className}`;
      return (
        <Icon alt="LayersRemove" className={classNames} {...propsRest}>
          <path d="M14.46,15.88L15.88,14.46L18,16.59L20.12,14.46L21.54,15.88L19.41,18L21.54,20.12L20.12,21.54L18,19.41L15.88,21.54L14.46,20.12L16.59,18L14.46,15.88M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z" />

        </Icon>
      );
    };
    LayersRemoveIcon.displayName = 'LayersRemoveIcon';
      