import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardF7Icon: FC<IconInterface> = function KeyboardF7Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF7Icon ${className}`;
      return (
        <Icon alt="KeyboardF7" className={classNames} {...propsRest}>
          <path d="M5 7H11V9H7V11H10V13H7V17H5V7M15 17H13L17 9H13V7H19V9L15 17Z" />

        </Icon>
      );
    };
    KeyboardF7Icon.displayName = 'KeyboardF7Icon';
      