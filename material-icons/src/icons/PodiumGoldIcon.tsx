import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PodiumGoldIcon: FC<IconInterface> = function PodiumGoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PodiumGoldIcon ${className}`;
      return (
        <Icon alt="PodiumGold" className={classNames} {...propsRest}>
          <path d="M12,7.09L14.45,8.58L13.8,5.77L16,3.89L13.11,3.64L12,1L10.87,3.64L8,3.89L10.18,5.77L9.5,8.58L12,7.09M15,23H9V10H15V23M1,17V23H7V17H1M5,21H3V19H5V21M17,13V23H23V13H17M21,21H19V15H21V21Z" />

        </Icon>
      );
    };
    PodiumGoldIcon.displayName = 'PodiumGoldIcon';
      