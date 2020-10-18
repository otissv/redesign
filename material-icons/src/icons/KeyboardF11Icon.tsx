import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardF11Icon: FC<IconInterface> = function KeyboardF11Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF11Icon ${className}`;
      return (
        <Icon alt="KeyboardF11" className={classNames} {...propsRest}>
          <path d="M3 7H9V9H5V11H8V13H5V17H3V7M11 7H15V17H13V9H11V7M17 7H21V17H19V9H17V7Z" />

        </Icon>
      );
    };
    KeyboardF11Icon.displayName = 'KeyboardF11Icon';
      