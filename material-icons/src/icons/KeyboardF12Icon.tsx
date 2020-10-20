import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const KeyboardF12Icon: FC<IconInterface> = function KeyboardF12Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardF12Icon ${className}`;
      return (
        <Icon alt="KeyboardF12" className={classNames} {...propsRest}>
          <path d="M2 7H8V9H4V11H7V13H4V17H2V7M16 7H20C21.11 7 22 7.9 22 9V11C22 12.11 21.11 13 20 13H18V15H22V17H16V13C16 11.9 16.9 11 18 11H20V9H16V7M10 7H14V17H12V9H10V7Z" />

        </Icon>
      );
    };
    KeyboardF12Icon.displayName = 'KeyboardF12Icon';
      