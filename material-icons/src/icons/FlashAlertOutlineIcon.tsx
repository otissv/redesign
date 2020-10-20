import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlashAlertOutlineIcon: FC<IconInterface> = function FlashAlertOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlashAlertOutlineIcon ${className}`;
      return (
        <Icon alt="FlashAlertOutline" className={classNames} {...propsRest}>
          <path d="M5,2H15L11.5,9H15L8,22V14H5V2M7,4V12H10V14.66L12,11H8.24L11.76,4M17,15H19V17H17V15M17,7H19V13H17V7Z" />

        </Icon>
      );
    };
    FlashAlertOutlineIcon.displayName = 'FlashAlertOutlineIcon';
      