import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardF6Icon: FC<IconInterface> = function KeyboardF6Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF6Icon ${className}`;
      return (
        <Icon alt="KeyboardF6" className={classNames} {...propsRest}>
          <path d="M5 7H11V9H7V11H10V13H7V17H5V7M15 7H19V9H15V11H17C18.11 11 19 11.9 19 13V15C19 16.11 18.11 17 17 17H15C13.9 17 13 16.11 13 15V9C13 7.9 13.9 7 15 7M15 13V15H17V13H15Z" />

        </Icon>
      );
    };
    KeyboardF6Icon.displayName = 'KeyboardF6Icon';
      