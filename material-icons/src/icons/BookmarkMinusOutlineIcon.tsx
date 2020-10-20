import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookmarkMinusOutlineIcon: FC<IconInterface> = function BookmarkMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookmarkMinusOutlineIcon ${className}`;
      return (
        <Icon alt="BookmarkMinusOutline" className={classNames} {...propsRest}>
          <path d="M9,11V9H15V11H9M19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17C18.11,3 19,3.9 19,5M17,5H7V18L12,15.82L17,18V5Z" />

        </Icon>
      );
    };
    BookmarkMinusOutlineIcon.displayName = 'BookmarkMinusOutlineIcon';
      