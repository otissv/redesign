import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeCityIcon: FC<IconInterface> = function HomeCityIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeCityIcon ${className}`;
      return (
        <Icon alt="HomeCity" className={classNames} {...propsRest}>
          <path d="M0,21V10L7.5,5L15,10V21H10V14H5V21H0M24,2V21H17V8.93L16,8.27V6H14V6.93L10,4.27V2H24M21,14H19V16H21V14M21,10H19V12H21V10M21,6H19V8H21V6Z" />

        </Icon>
      );
    };
    HomeCityIcon.displayName = 'HomeCityIcon';
      