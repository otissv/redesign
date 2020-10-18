import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BookLockOpenIcon: FC<IconInterface> = function BookLockOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookLockOpenIcon ${className}`;
      return (
        <Icon alt="BookLockOpen" className={classNames} {...propsRest}>
          <path d="M18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2M18,20H10V16H11V14A3,3 0 0,1 14,11A3,3 0 0,1 17,14H15A1,1 0 0,0 14,13A1,1 0 0,0 13,14V16H18V20Z" />

        </Icon>
      );
    };
    BookLockOpenIcon.displayName = 'BookLockOpenIcon';
      