import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardReturnIcon: FC<IconInterface> = function KeyboardReturnIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardReturnIcon ${className}`;
      return (
        <Icon alt="KeyboardReturn" className={classNames} {...propsRest}>
          <path d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z" />

        </Icon>
      );
    };
    KeyboardReturnIcon.displayName = 'KeyboardReturnIcon';
      