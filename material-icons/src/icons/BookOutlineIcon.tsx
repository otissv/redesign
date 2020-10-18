import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BookOutlineIcon: FC<IconInterface> = function BookOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookOutlineIcon ${className}`;
      return (
        <Icon alt="BookOutline" className={classNames} {...propsRest}>
          <path d="M18,2A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H18M18,4H13V12L10.5,9.75L8,12V4H6V20H18V4Z" />

        </Icon>
      );
    };
    BookOutlineIcon.displayName = 'BookOutlineIcon';
      