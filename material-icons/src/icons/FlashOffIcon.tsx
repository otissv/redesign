import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlashOffIcon: FC<IconInterface> = function FlashOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlashOffIcon ${className}`;
      return (
        <Icon alt="FlashOff" className={classNames} {...propsRest}>
          <path d="M17,10H13L17,2H7V4.18L15.46,12.64M3.27,3L2,4.27L7,9.27V13H10V22L13.58,15.86L17.73,20L19,18.73L3.27,3Z" />

        </Icon>
      );
    };
    FlashOffIcon.displayName = 'FlashOffIcon';
      