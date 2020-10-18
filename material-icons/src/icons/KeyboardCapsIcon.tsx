import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyboardCapsIcon: FC<IconInterface> = function KeyboardCapsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyboardCapsIcon ${className}`;
      return (
        <Icon alt="KeyboardCaps" className={classNames} {...propsRest}>
          <path d="M6,18H18V16H6M12,8.41L16.59,13L18,11.58L12,5.58L6,11.58L7.41,13L12,8.41Z" />

        </Icon>
      );
    };
    KeyboardCapsIcon.displayName = 'KeyboardCapsIcon';
      