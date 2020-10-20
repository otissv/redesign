import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookIcon: FC<IconInterface> = function BookIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookIcon ${className}`;
      return (
        <Icon alt="Book" className={classNames} {...propsRest}>
          <path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" />

        </Icon>
      );
    };
    BookIcon.displayName = 'BookIcon';
      