import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookmarkCheckIcon: FC<IconInterface> = function BookmarkCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookmarkCheckIcon ${className}`;
      return (
        <Icon alt="BookmarkCheck" className={classNames} {...propsRest}>
          <path d="M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,14L17.25,7.76L15.84,6.34L11,11.18L8.41,8.59L7,10L11,14Z" />

        </Icon>
      );
    };
    BookmarkCheckIcon.displayName = 'BookmarkCheckIcon';
      