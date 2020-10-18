import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FlashOutlineIcon: FC<IconInterface> = function FlashOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlashOutlineIcon ${className}`;
      return (
        <Icon alt="FlashOutline" className={classNames} {...propsRest}>
          <path d="M7,2H17L13.5,9H17L10,22V14H7V2M9,4V12H12V14.66L14,11H10.24L13.76,4H9Z" />

        </Icon>
      );
    };
    FlashOutlineIcon.displayName = 'FlashOutlineIcon';
      