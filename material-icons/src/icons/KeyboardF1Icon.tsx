import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardF1Icon: FC<IconInterface> = function KeyboardF1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF1Icon ${className}`;
      return (
        <Icon alt="KeyboardF1" className={classNames} {...propsRest}>
          <path d="M6 7H12V9H8V11H11V13H8V17H6V7M14 7H18V17H16V9H14V7Z" />

        </Icon>
      );
    };
    KeyboardF1Icon.displayName = 'KeyboardF1Icon';
      