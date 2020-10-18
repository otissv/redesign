import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PipeDisconnectedIcon: FC<IconInterface> = function PipeDisconnectedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PipeDisconnectedIcon ${className}`;
      return (
        <Icon alt="PipeDisconnected" className={classNames} {...propsRest}>
          <path d="M16,9V11H8V9H10V8H4V10H2V2H4V4H12A2,2 0 0,1 14,6V9H16M10,15V18A2,2 0 0,0 12,20H20V22H22V14H20V16H14V15H16V13H8V15H10Z" />

        </Icon>
      );
    };
    PipeDisconnectedIcon.displayName = 'PipeDisconnectedIcon';
      