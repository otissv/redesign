import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PictureInPictureBottomRightIcon: FC<IconInterface> = function PictureInPictureBottomRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PictureInPictureBottomRightIcon ${className}`;
      return (
        <Icon alt="PictureInPictureBottomRight" className={classNames} {...propsRest}>
          <path d="M19,11H11V17H19V11M23,19V5C23,3.88 22.1,3 21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19M21,19H3V4.97H21V19Z" />

        </Icon>
      );
    };
    PictureInPictureBottomRightIcon.displayName = 'PictureInPictureBottomRightIcon';
      