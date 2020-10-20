import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookPlayOutlineIcon: FC<IconInterface> = function BookPlayOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookPlayOutlineIcon ${className}`;
      return (
        <Icon alt="BookPlayOutline" className={classNames} {...propsRest}>
          <path d="M17,16L22,19L17,22V16M18,2A2,2 0 0,1 20,4V15.42L18,14.27V4H13V12L10.5,9.75L8,12V4H6V20H15V22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H18Z" />

        </Icon>
      );
    };
    BookPlayOutlineIcon.displayName = 'BookPlayOutlineIcon';
      