import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DiamondOutlineIcon: FC<IconInterface> = function DiamondOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DiamondOutlineIcon ${className}`;
      return (
        <Icon alt="DiamondOutline" className={classNames} {...propsRest}>
          <path d="M18,2H6L2,8L12,22L22,8L18,2M4.43,8L7.07,4H16.93L19.57,8L12,18.56L4.43,8Z" />

        </Icon>
      );
    };
    DiamondOutlineIcon.displayName = 'DiamondOutlineIcon';
      