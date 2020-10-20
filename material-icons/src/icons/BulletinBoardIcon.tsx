import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BulletinBoardIcon: FC<IconInterface> = function BulletinBoardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BulletinBoardIcon ${className}`;
      return (
        <Icon alt="BulletinBoard" className={classNames} {...propsRest}>
          <path d="M12.04,2.5L9.53,5H14.53L12.04,2.5M4,7V20H20V7H4M12,0L17,5V5H20A2,2 0 0,1 22,7V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V7A2,2 0 0,1 4,5H7V5L12,0M7,18V14H12V18H7M14,17V10H18V17H14M6,12V9H11V12H6Z" />

        </Icon>
      );
    };
    BulletinBoardIcon.displayName = 'BulletinBoardIcon';
      