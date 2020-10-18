import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FolderStarIcon: FC<IconInterface> = function FolderStarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderStarIcon ${className}`;
      return (
        <Icon alt="FolderStar" className={classNames} {...propsRest}>
          <path d="M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M17.94,17L15,15.28L12.06,17L12.84,13.67L10.25,11.43L13.66,11.14L15,8L16.34,11.14L19.75,11.43L17.16,13.67L17.94,17Z" />

        </Icon>
      );
    };
    FolderStarIcon.displayName = 'FolderStarIcon';
      