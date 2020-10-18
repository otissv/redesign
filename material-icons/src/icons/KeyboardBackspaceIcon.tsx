import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardBackspaceIcon: FC<IconInterface> = function KeyboardBackspaceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardBackspaceIcon ${className}`;
      return (
        <Icon alt="KeyboardBackspace" className={classNames} {...propsRest}>
          <path d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" />

        </Icon>
      );
    };
    KeyboardBackspaceIcon.displayName = 'KeyboardBackspaceIcon';
      