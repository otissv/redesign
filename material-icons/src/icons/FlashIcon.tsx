import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlashIcon: FC<IconInterface> = function FlashIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlashIcon ${className}`;
      return (
        <Icon alt="Flash" className={classNames} {...propsRest}>
          <path d="M7,2V13H10V22L17,10H13L17,2H7Z" />

        </Icon>
      );
    };
    FlashIcon.displayName = 'FlashIcon';
      