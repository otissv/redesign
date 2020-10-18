import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BookmarkIcon: FC<IconInterface> = function BookmarkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookmarkIcon ${className}`;
      return (
        <Icon alt="Bookmark" className={classNames} {...propsRest}>
          <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />

        </Icon>
      );
    };
    BookmarkIcon.displayName = 'BookmarkIcon';
      