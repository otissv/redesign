import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MovieIcon: FC<IconInterface> = function MovieIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MovieIcon ${className}`;
      return (
        <Icon alt="Movie" className={classNames} {...propsRest}>
          <path d="M18,4L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4H18Z" />

        </Icon>
      );
    };
    MovieIcon.displayName = 'MovieIcon';
      