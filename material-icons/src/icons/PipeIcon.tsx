import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PipeIcon: FC<IconInterface> = function PipeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PipeIcon ${className}`;
      return (
        <Icon alt="Pipe" className={classNames} {...propsRest}>
          <path d="M22,14H20V16H14V13H16V11H14V6A2,2 0 0,0 12,4H4V2H2V10H4V8H10V11H8V13H10V18A2,2 0 0,0 12,20H20V22H22" />

        </Icon>
      );
    };
    PipeIcon.displayName = 'PipeIcon';
      