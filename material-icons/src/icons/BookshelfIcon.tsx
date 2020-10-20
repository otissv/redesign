import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookshelfIcon: FC<IconInterface> = function BookshelfIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookshelfIcon ${className}`;
      return (
        <Icon alt="Bookshelf" className={classNames} {...propsRest}>
          <path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" />

        </Icon>
      );
    };
    BookshelfIcon.displayName = 'BookshelfIcon';
      