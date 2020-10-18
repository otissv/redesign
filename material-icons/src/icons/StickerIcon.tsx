import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const StickerIcon: FC<IconInterface> = function StickerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StickerIcon ${className}`;
      return (
        <Icon alt="Sticker" className={classNames} {...propsRest}>
          <path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z" />

        </Icon>
      );
    };
    StickerIcon.displayName = 'StickerIcon';
      