import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FlashAlertIcon: FC<IconInterface> = function FlashAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlashAlertIcon ${className}`;
      return (
        <Icon alt="FlashAlert" className={classNames} {...propsRest}>
          <path d="M5,2V13H8V22L15,10H11L15,2M17,15H19V17H17V15M17,7H19V13H17V7Z" />

        </Icon>
      );
    };
    FlashAlertIcon.displayName = 'FlashAlertIcon';
      