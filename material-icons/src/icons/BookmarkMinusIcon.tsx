import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookmarkMinusIcon: FC<IconInterface> = function BookmarkMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookmarkMinusIcon ${className}`;
      return (
        <Icon alt="BookmarkMinus" className={classNames} {...propsRest}>
          <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5A2,2 0 0,0 17,3M15,11H9V9H15V11Z" />

        </Icon>
      );
    };
    BookmarkMinusIcon.displayName = 'BookmarkMinusIcon';
      