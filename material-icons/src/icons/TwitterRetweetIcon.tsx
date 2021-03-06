import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TwitterRetweetIcon: FC<IconInterface> = function TwitterRetweetIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TwitterRetweetIcon ${className}`;
      return (
        <Icon alt="TwitterRetweet" className={classNames} {...propsRest}>
          <path d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z" />

        </Icon>
      );
    };
    TwitterRetweetIcon.displayName = 'TwitterRetweetIcon';
      