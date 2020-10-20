import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RadioFmIcon: FC<IconInterface> = function RadioFmIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RadioFmIcon ${className}`;
      return (
        <Icon alt="RadioFm" className={classNames} {...propsRest}>
          <path d="M3,7V17H5V13H8V11H5V9H9V7H3M13,7A2,2 0 0,0 11,9V17H13V9H15V16H17V9H19V17H21V9A2,2 0 0,0 19,7H13Z" />

        </Icon>
      );
    };
    RadioFmIcon.displayName = 'RadioFmIcon';
      