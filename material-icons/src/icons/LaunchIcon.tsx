import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LaunchIcon: FC<IconInterface> = function LaunchIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LaunchIcon ${className}`;
      return (
        <Icon alt="Launch" className={classNames} {...propsRest}>
          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />

        </Icon>
      );
    };
    LaunchIcon.displayName = 'LaunchIcon';
      