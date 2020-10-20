import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PictureInPictureTopRightOutlineIcon: FC<IconInterface> = function PictureInPictureTopRightOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PictureInPictureTopRightOutlineIcon ${className}`;
      return (
        <Icon alt="PictureInPictureTopRightOutline" className={classNames} {...propsRest}>
          <path d="M19,7H11V13H19V7M17,11H13V9H17V11M21,3H3A2,2 0 0,0 1,5V19C1,20.11 1.9,21 3,21H21A2,2 0 0,0 23,19V5C23,3.91 22.1,3 21,3M21,19H3V5H21V19Z" />

        </Icon>
      );
    };
    PictureInPictureTopRightOutlineIcon.displayName = 'PictureInPictureTopRightOutlineIcon';
      