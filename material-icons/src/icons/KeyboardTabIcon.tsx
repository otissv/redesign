import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardTabIcon: FC<IconInterface> = function KeyboardTabIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardTabIcon ${className}`;
      return (
        <Icon alt="KeyboardTab" className={classNames} {...propsRest}>
          <path d="M20,18H22V6H20M11.59,7.41L15.17,11H1V13H15.17L11.59,16.58L13,18L19,12L13,6L11.59,7.41Z" />

        </Icon>
      );
    };
    KeyboardTabIcon.displayName = 'KeyboardTabIcon';
      