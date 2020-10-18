import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardSpaceIcon: FC<IconInterface> = function KeyboardSpaceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardSpaceIcon ${className}`;
      return (
        <Icon alt="KeyboardSpace" className={classNames} {...propsRest}>
          <path d="M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z" />

        </Icon>
      );
    };
    KeyboardSpaceIcon.displayName = 'KeyboardSpaceIcon';
      