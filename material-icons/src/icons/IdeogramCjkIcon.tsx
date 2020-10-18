import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const IdeogramCjkIcon: FC<IconInterface> = function IdeogramCjkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `IdeogramCjkIcon ${className}`;
      return (
        <Icon alt="IdeogramCjk" className={classNames} {...propsRest}>
          <path d="M11 4V6H4V10H6V8H18V10H20V6H13V4M8 10V12H13.59L11.59 14H4V16H11V18H10V20H13V16H20V14H14.21L16 12.21V10Z" />

        </Icon>
      );
    };
    IdeogramCjkIcon.displayName = 'IdeogramCjkIcon';
      