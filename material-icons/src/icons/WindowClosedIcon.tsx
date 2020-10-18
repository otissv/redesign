import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WindowClosedIcon: FC<IconInterface> = function WindowClosedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WindowClosedIcon ${className}`;
      return (
        <Icon alt="WindowClosed" className={classNames} {...propsRest}>
          <path d="M6,11H10V9H14V11H18V4H6V11M18,13H6V20H18V13M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2Z" />

        </Icon>
      );
    };
    WindowClosedIcon.displayName = 'WindowClosedIcon';
      