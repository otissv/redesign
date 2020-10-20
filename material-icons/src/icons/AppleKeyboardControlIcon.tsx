import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AppleKeyboardControlIcon: FC<IconInterface> = function AppleKeyboardControlIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AppleKeyboardControlIcon ${className}`;
      return (
        <Icon alt="AppleKeyboardControl" className={classNames} {...propsRest}>
          <path d="M19.78,11.78L18.36,13.19L12,6.83L5.64,13.19L4.22,11.78L12,4L19.78,11.78Z" />

        </Icon>
      );
    };
    AppleKeyboardControlIcon.displayName = 'AppleKeyboardControlIcon';
      