import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TreasureChestIcon: FC<IconInterface> = function TreasureChestIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TreasureChestIcon ${className}`;
      return (
        <Icon alt="TreasureChest" className={classNames} {...propsRest}>
          <path d="M5,4H19A3,3 0 0,1 22,7V11H15V10H9V11H2V7A3,3 0 0,1 5,4M11,11H13V13H11V11M2,12H9V13L11,15H13L15,13V12H22V20H2V12Z" />

        </Icon>
      );
    };
    TreasureChestIcon.displayName = 'TreasureChestIcon';
      