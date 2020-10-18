import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BookmarkMultipleIcon: FC<IconInterface> = function BookmarkMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookmarkMultipleIcon ${className}`;
      return (
        <Icon alt="BookmarkMultiple" className={classNames} {...propsRest}>
          <path d="M15,5A2,2 0 0,1 17,7V23L10,20L3,23V7C3,5.89 3.9,5 5,5H15M9,1H19A2,2 0 0,1 21,3V19L19,18.13V3H7A2,2 0 0,1 9,1Z" />

        </Icon>
      );
    };
    BookmarkMultipleIcon.displayName = 'BookmarkMultipleIcon';
      