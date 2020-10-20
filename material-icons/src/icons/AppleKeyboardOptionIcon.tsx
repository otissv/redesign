import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AppleKeyboardOptionIcon: FC<IconInterface> = function AppleKeyboardOptionIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AppleKeyboardOptionIcon ${className}`;
      return (
        <Icon alt="AppleKeyboardOption" className={classNames} {...propsRest}>
          <path d="M3,4H9.11L16.15,18H21V20H14.88L7.84,6H3V4M14,4H21V6H14V4Z" />

        </Icon>
      );
    };
    AppleKeyboardOptionIcon.displayName = 'AppleKeyboardOptionIcon';
      