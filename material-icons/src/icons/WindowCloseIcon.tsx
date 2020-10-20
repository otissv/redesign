import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WindowCloseIcon: FC<IconInterface> = function WindowCloseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WindowCloseIcon ${className}`;
      return (
        <Icon alt="WindowClose" className={classNames} {...propsRest}>
          <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />

        </Icon>
      );
    };
    WindowCloseIcon.displayName = 'WindowCloseIcon';
      