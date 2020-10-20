import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const KeyboardF2Icon: FC<IconInterface> = function KeyboardF2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF2Icon ${className}`;
      return (
        <Icon alt="KeyboardF2" className={classNames} {...propsRest}>
          <path d="M5 7H11V9H7V11H10V13H7V17H5V7M13 7H17C18.11 7 19 7.9 19 9V11C19 12.11 18.11 13 17 13H15V15H19V17H13V13C13 11.9 13.9 11 15 11H17V9H13V7Z" />

        </Icon>
      );
    };
    KeyboardF2Icon.displayName = 'KeyboardF2Icon';
      