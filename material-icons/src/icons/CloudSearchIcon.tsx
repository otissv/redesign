import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CloudSearchIcon: FC<IconInterface> = function CloudSearchIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CloudSearchIcon ${className}`;
      return (
        <Icon alt="CloudSearch" className={classNames} {...propsRest}>
          <path d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M19.35,8.03C21.95,8.22 24,10.36 24,13C24,14.64 23.21,16.1 22,17V16.5A6.5,6.5 0 0,0 15.5,10A6.5,6.5 0 0,0 9,16.5C9,17 9.06,17.5 9.17,18H6A6,6 0 0,1 0,12C0,8.9 2.34,6.36 5.35,6.03C6.6,3.64 9.11,2 12,2C15.64,2 18.67,4.59 19.35,8.03Z" />

        </Icon>
      );
    };
    CloudSearchIcon.displayName = 'CloudSearchIcon';
      