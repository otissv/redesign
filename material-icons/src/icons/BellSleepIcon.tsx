import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BellSleepIcon: FC<IconInterface> = function BellSleepIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BellSleepIcon ${className}`;
      return (
        <Icon alt="BellSleep" className={classNames} {...propsRest}>
          <path d="M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M15,9H9V11H12.24L9,13.7V16H15V14H11.76L15,11.3V9Z" />

        </Icon>
      );
    };
    BellSleepIcon.displayName = 'BellSleepIcon';
      