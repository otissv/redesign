import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WindowShutterOpenIcon: FC<IconInterface> = function WindowShutterOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WindowShutterOpenIcon ${className}`;
      return (
        <Icon alt="WindowShutterOpen" className={classNames} {...propsRest}>
          <path d="M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9Z" />

        </Icon>
      );
    };
    WindowShutterOpenIcon.displayName = 'WindowShutterOpenIcon';
      