import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardF9Icon: FC<IconInterface> = function KeyboardF9Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF9Icon ${className}`;
      return (
        <Icon alt="KeyboardF9" className={classNames} {...propsRest}>
          <path d="M5 7H11V9H7V11H10V13H7V17H5V7M17 17H13V15H17V13H15C13.9 13 13 12.11 13 11V9C13 7.9 13.9 7 15 7H17C18.11 7 19 7.9 19 9V15C19 16.11 18.11 17 17 17M17 11V9H15V11H17Z" />

        </Icon>
      );
    };
    KeyboardF9Icon.displayName = 'KeyboardF9Icon';
      