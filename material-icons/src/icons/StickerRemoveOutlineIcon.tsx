import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StickerRemoveOutlineIcon: FC<IconInterface> = function StickerRemoveOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StickerRemoveOutlineIcon ${className}`;
      return (
        <Icon alt="StickerRemoveOutline" className={classNames} {...propsRest}>
          <path d="M16 9.4L13.4 12L16 14.6L14.6 16L12 13.4L9.4 16L8 14.6L10.6 12L8 9.4L9.4 8L12 10.6L14.6 8L16 9.4M22 5.5V16L16 22H5.5C3.6 22 2 20.4 2 18.5V5.5C2 3.6 3.6 2 5.5 2H18.5C20.4 2 22 3.6 22 5.5M20 5.8C20 4.8 19.2 4 18.2 4H5.8C4.8 4 4 4.8 4 5.8V18.3C4 19.3 4.8 20.1 5.8 20.1H15V18.6C15 16.7 16.6 15.1 18.5 15.1H20V5.8Z" />

        </Icon>
      );
    };
    StickerRemoveOutlineIcon.displayName = 'StickerRemoveOutlineIcon';
      