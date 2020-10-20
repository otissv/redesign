import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DiameterOutlineIcon: FC<IconInterface> = function DiameterOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DiameterOutlineIcon ${className}`;
      return (
        <Icon alt="DiameterOutline" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16,15V13H8V15L5,12L8,9V11H16V9L19,12L16,15Z" />

        </Icon>
      );
    };
    DiameterOutlineIcon.displayName = 'DiameterOutlineIcon';
      