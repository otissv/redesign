import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TelevisionIcon: FC<IconInterface> = function TelevisionIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TelevisionIcon ${className}`;
      return (
        <Icon alt="Television" className={classNames} {...propsRest}>
          <path d="M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z" />

        </Icon>
      );
    };
    TelevisionIcon.displayName = 'TelevisionIcon';
      