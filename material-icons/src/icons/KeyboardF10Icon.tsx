import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardF10Icon: FC<IconInterface> = function KeyboardF10Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF10Icon ${className}`;
      return (
        <Icon alt="KeyboardF10" className={classNames} {...propsRest}>
          <path d="M2 7H8V9H4V11H7V13H4V17H2V7M10 7H14V17H12V9H10V7M18 7H20C21.11 7 22 7.9 22 9V15C22 16.11 21.11 17 20 17H18C16.9 17 16 16.11 16 15V9C16 7.9 16.9 7 18 7M18 9V15H20V9H18Z" />

        </Icon>
      );
    };
    KeyboardF10Icon.displayName = 'KeyboardF10Icon';
      