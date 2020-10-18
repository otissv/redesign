import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardF5Icon: FC<IconInterface> = function KeyboardF5Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF5Icon ${className}`;
      return (
        <Icon alt="KeyboardF5" className={classNames} {...propsRest}>
          <path d="M5 7H11V9H7V11H10V13H7V17H5V7M13 7H19V9H15V11H17C18.11 11 19 11.9 19 13V15C19 16.11 18.11 17 17 17H13V15H17V13H13V7Z" />

        </Icon>
      );
    };
    KeyboardF5Icon.displayName = 'KeyboardF5Icon';
      