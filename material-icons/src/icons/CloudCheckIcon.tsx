import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CloudCheckIcon: FC<IconInterface> = function CloudCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CloudCheckIcon ${className}`;
      return (
        <Icon alt="CloudCheck" className={classNames} {...propsRest}>
          <path d="M10,17L6.5,13.5L7.91,12.08L10,14.17L15.18,9L16.59,10.41M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />

        </Icon>
      );
    };
    CloudCheckIcon.displayName = 'CloudCheckIcon';
      