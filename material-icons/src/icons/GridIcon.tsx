import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GridIcon: FC<IconInterface> = function GridIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GridIcon ${className}`;
      return (
        <Icon alt="Grid" className={classNames} {...propsRest}>
          <path d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z" />

        </Icon>
      );
    };
    GridIcon.displayName = 'GridIcon';
      