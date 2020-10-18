import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DockRightIcon: FC<IconInterface> = function DockRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DockRightIcon ${className}`;
      return (
        <Icon alt="DockRight" className={classNames} {...propsRest}>
          <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" />

        </Icon>
      );
    };
    DockRightIcon.displayName = 'DockRightIcon';
      