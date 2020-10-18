import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GateArrowRightIcon: FC<IconInterface> = function GateArrowRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GateArrowRightIcon ${className}`;
      return (
        <Icon alt="GateArrowRight" className={classNames} {...propsRest}>
          <path d="M15 5V10H13V6H11V10H9V8H7V20H9V18H11V20H12.09A6 6 0 0 1 12 19A6 6 0 0 1 13 15.69V12H15V13.81A6 6 0 0 1 17 13.09V12H19V13.09A6 6 0 0 1 21 13.81V12H22V10H21V5H19V10H17V5H15M9 12H11V16H9V12M19 16V18H15V20H19V22L22 19L19 16Z" />

        </Icon>
      );
    };
    GateArrowRightIcon.displayName = 'GateArrowRightIcon';
      