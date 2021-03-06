import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookmarkMultipleOutlineIcon: FC<IconInterface> = function BookmarkMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookmarkMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="BookmarkMultipleOutline" className={classNames} {...propsRest}>
          <path d="M9,1H19A2,2 0 0,1 21,3V19L19,18.13V3H7A2,2 0 0,1 9,1M15,20V7H5V20L10,17.82L15,20M15,5C16.11,5 17,5.9 17,7V23L10,20L3,23V7A2,2 0 0,1 5,5H15Z" />

        </Icon>
      );
    };
    BookmarkMultipleOutlineIcon.displayName = 'BookmarkMultipleOutlineIcon';
      