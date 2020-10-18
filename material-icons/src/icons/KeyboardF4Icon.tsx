import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardF4Icon: FC<IconInterface> = function KeyboardF4Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF4Icon ${className}`;
      return (
        <Icon alt="KeyboardF4" className={classNames} {...propsRest}>
          <path d="M5 7H11V9H7V11H10V13H7V17H5V7M13 7H15V11H17V7H19V17H17V13H13V7Z" />

        </Icon>
      );
    };
    KeyboardF4Icon.displayName = 'KeyboardF4Icon';
      