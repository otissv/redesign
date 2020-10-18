import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PictureInPictureTopRightIcon: FC<IconInterface> = function PictureInPictureTopRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PictureInPictureTopRightIcon ${className}`;
      return (
        <Icon alt="PictureInPictureTopRight" className={classNames} {...propsRest}>
          <path d="M19,7H11V13H19V7M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z" />

        </Icon>
      );
    };
    PictureInPictureTopRightIcon.displayName = 'PictureInPictureTopRightIcon';
      