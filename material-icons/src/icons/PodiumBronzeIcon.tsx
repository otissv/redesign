import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PodiumBronzeIcon: FC<IconInterface> = function PodiumBronzeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PodiumBronzeIcon ${className}`;
      return (
        <Icon alt="PodiumBronze" className={classNames} {...propsRest}>
          <path d="M4,13.09L6.45,14.58L5.8,11.77L8,9.89L5.11,9.64L4,7L2.87,9.64L0,9.89L2.18,11.77L1.5,14.58L4,13.09M7,23H1V17H7V23M9,10V23H15V10H9M13,21H11V12H13V21M17,13V23H23V13H17M21,21H19V15H21V21Z" />

        </Icon>
      );
    };
    PodiumBronzeIcon.displayName = 'PodiumBronzeIcon';
      