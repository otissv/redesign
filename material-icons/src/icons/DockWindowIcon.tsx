import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DockWindowIcon: FC<IconInterface> = function DockWindowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DockWindowIcon ${className}`;
      return (
        <Icon alt="DockWindow" className={classNames} {...propsRest}>
          <path d="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z" />

        </Icon>
      );
    };
    DockWindowIcon.displayName = 'DockWindowIcon';
      