import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StickerCircleOutlineIcon: FC<IconInterface> = function StickerCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StickerCircleOutlineIcon ${className}`;
      return (
        <Icon alt="StickerCircleOutline" className={classNames} {...propsRest}>
          <path d="M12.12,18.46L18.3,12.28C16.94,12.59 15.31,13.2 14.07,14.46C13.04,15.5 12.39,16.83 12.12,18.46M20.75,10H21.05C21.44,10 21.79,10.27 21.93,10.64C22.07,11 22,11.43 21.7,11.71L11.7,21.71C11.5,21.9 11.26,22 11,22L10.64,21.93C10.27,21.79 10,21.44 10,21.05C9.84,17.66 10.73,14.96 12.66,13.03C15.5,10.2 19.62,10 20.75,10M12,2C16.5,2 20.34,5 21.58,9.11L20,9H19.42C18.24,6.07 15.36,4 12,4A8,8 0 0,0 4,12C4,15.36 6.07,18.24 9,19.42C8.97,20.13 9,20.85 9.11,21.57C5,20.33 2,16.5 2,12C2,6.47 6.5,2 12,2Z" />

        </Icon>
      );
    };
    StickerCircleOutlineIcon.displayName = 'StickerCircleOutlineIcon';
      