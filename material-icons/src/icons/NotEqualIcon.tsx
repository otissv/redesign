import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NotEqualIcon: FC<IconInterface> = function NotEqualIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NotEqualIcon ${className}`;
      return (
        <Icon alt="NotEqual" className={classNames} {...propsRest}>
          <path d="M21,10H9V8H21V10M21,16H9V14H21V16M4,5H6V16H4V5M6,18V20H4V18H6Z" />

        </Icon>
      );
    };
    NotEqualIcon.displayName = 'NotEqualIcon';
      