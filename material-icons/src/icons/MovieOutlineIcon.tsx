import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MovieOutlineIcon: FC<IconInterface> = function MovieOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MovieOutlineIcon ${className}`;
      return (
        <Icon alt="MovieOutline" className={classNames} {...propsRest}>
          <path d="M5.76,10H20V18H4V6.47M22,4H18L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4Z" />

        </Icon>
      );
    };
    MovieOutlineIcon.displayName = 'MovieOutlineIcon';
      