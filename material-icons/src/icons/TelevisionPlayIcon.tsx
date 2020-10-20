import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TelevisionPlayIcon: FC<IconInterface> = function TelevisionPlayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TelevisionPlayIcon ${className}`;
      return (
        <Icon alt="TelevisionPlay" className={classNames} {...propsRest}>
          <path d="M21,3H3C1.89,3 1,3.89 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7" />

        </Icon>
      );
    };
    TelevisionPlayIcon.displayName = 'TelevisionPlayIcon';
      