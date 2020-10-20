import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ImageAlbumIcon: FC<IconInterface> = function ImageAlbumIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImageAlbumIcon ${className}`;
      return (
        <Icon alt="ImageAlbum" className={classNames} {...propsRest}>
          <path d="M6,19L9,15.14L11.14,17.72L14.14,13.86L18,19H6M6,4H11V12L8.5,10.5L6,12M18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z" />

        </Icon>
      );
    };
    ImageAlbumIcon.displayName = 'ImageAlbumIcon';
      