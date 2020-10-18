import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BookmarkPlusOutlineIcon: FC<IconInterface> = function BookmarkPlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookmarkPlusOutlineIcon ${className}`;
      return (
        <Icon alt="BookmarkPlusOutline" className={classNames} {...propsRest}>
          <path d="M17,18V5H7V18L12,15.82L17,18M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z" />

        </Icon>
      );
    };
    BookmarkPlusOutlineIcon.displayName = 'BookmarkPlusOutlineIcon';
      