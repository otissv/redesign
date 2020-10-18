import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SleepIcon: FC<IconInterface> = function SleepIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SleepIcon ${className}`;
      return (
        <Icon alt="Sleep" className={classNames} {...propsRest}>
          <path d="M23,12H17V10L20.39,6H17V4H23V6L19.62,10H23V12M15,16H9V14L12.39,10H9V8H15V10L11.62,14H15V16M7,20H1V18L4.39,14H1V12H7V14L3.62,18H7V20Z" />

        </Icon>
      );
    };
    SleepIcon.displayName = 'SleepIcon';
      