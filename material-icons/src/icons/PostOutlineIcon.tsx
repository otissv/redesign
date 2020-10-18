import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PostOutlineIcon: FC<IconInterface> = function PostOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PostOutlineIcon ${className}`;
      return (
        <Icon alt="PostOutline" className={classNames} {...propsRest}>
          <path d="M19 5V19H5V5H19M21 3H3V21H21V3M17 17H7V16H17V17M17 15H7V14H17V15M17 12H7V7H17V12Z" />

        </Icon>
      );
    };
    PostOutlineIcon.displayName = 'PostOutlineIcon';
      