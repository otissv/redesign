import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AppleKeyboardShiftIcon: FC<IconInterface> = function AppleKeyboardShiftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AppleKeyboardShiftIcon ${className}`;
      return (
        <Icon alt="AppleKeyboardShift" className={classNames} {...propsRest}>
          <path d="M15,18V12H17.17L12,6.83L6.83,12H9V18H15M12,4L22,14H17V20H7V14H2L12,4Z" />

        </Icon>
      );
    };
    AppleKeyboardShiftIcon.displayName = 'AppleKeyboardShiftIcon';
      