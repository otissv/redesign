import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PolaroidIcon: FC<IconInterface> = function PolaroidIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PolaroidIcon ${className}`;
      return (
        <Icon alt="Polaroid" className={classNames} {...propsRest}>
          <path d="M6,3H18A2,2 0 0,1 20,5V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V5A2,2 0 0,1 6,3M6,5V17H18V5H6Z" />

        </Icon>
      );
    };
    PolaroidIcon.displayName = 'PolaroidIcon';
      