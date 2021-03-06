import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookmarkOutlineIcon: FC<IconInterface> = function BookmarkOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookmarkOutlineIcon ${className}`;
      return (
        <Icon alt="BookmarkOutline" className={classNames} {...propsRest}>
          <path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />

        </Icon>
      );
    };
    BookmarkOutlineIcon.displayName = 'BookmarkOutlineIcon';
      