import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TimerSandFullIcon: FC<IconInterface> = function TimerSandFullIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TimerSandFullIcon ${className}`;
      return (
        <Icon alt="TimerSandFull" className={classNames} {...propsRest}>
          <path d="M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6Z" />

        </Icon>
      );
    };
    TimerSandFullIcon.displayName = 'TimerSandFullIcon';
      