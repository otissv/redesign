import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FridgeIcon: FC<IconInterface> = function FridgeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FridgeIcon ${className}`;
      return (
        <Icon alt="Fridge" className={classNames} {...propsRest}>
          <path d="M7,2H17A2,2 0 0,1 19,4V9H5V4A2,2 0 0,1 7,2M19,19A2,2 0 0,1 17,21V22H15V21H9V22H7V21A2,2 0 0,1 5,19V10H19V19M8,5V7H10V5H8M8,12V15H10V12H8Z" />

        </Icon>
      );
    };
    FridgeIcon.displayName = 'FridgeIcon';
      