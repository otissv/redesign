import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PostIcon: FC<IconInterface> = function PostIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PostIcon ${className}`;
      return (
        <Icon alt="Post" className={classNames} {...propsRest}>
          <path d="M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z" />

        </Icon>
      );
    };
    PostIcon.displayName = 'PostIcon';
      