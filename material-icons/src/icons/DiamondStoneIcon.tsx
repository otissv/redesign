import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DiamondStoneIcon: FC<IconInterface> = function DiamondStoneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DiamondStoneIcon ${className}`;
      return (
        <Icon alt="DiamondStone" className={classNames} {...propsRest}>
          <path d="M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z" />

        </Icon>
      );
    };
    DiamondStoneIcon.displayName = 'DiamondStoneIcon';
      