import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BookmarkPlusIcon: FC<IconInterface> = function BookmarkPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookmarkPlusIcon ${className}`;
      return (
        <Icon alt="BookmarkPlus" className={classNames} {...propsRest}>
          <path d="M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7V9H9V11H11V13H13V11H15V9H13V7H11Z" />

        </Icon>
      );
    };
    BookmarkPlusIcon.displayName = 'BookmarkPlusIcon';
      