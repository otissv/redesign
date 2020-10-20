import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WindowRestoreIcon: FC<IconInterface> = function WindowRestoreIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WindowRestoreIcon ${className}`;
      return (
        <Icon alt="WindowRestore" className={classNames} {...propsRest}>
          <path d="M4,8H8V4H20V16H16V20H4V8M16,8V14H18V6H10V8H16M6,12V18H14V12H6Z" />

        </Icon>
      );
    };
    WindowRestoreIcon.displayName = 'WindowRestoreIcon';
      