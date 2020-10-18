import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BookAccountIcon: FC<IconInterface> = function BookAccountIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookAccountIcon ${className}`;
      return (
        <Icon alt="BookAccount" className={classNames} {...propsRest}>
          <path d="M18 2H12V9L9.5 7.5L7 9V2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V4A2 2 0 0 0 18 2M14 12A2 2 0 1 1 12 14A2 2 0 0 1 14 12M18 20H10V19C10 17.67 12.67 17 14 17S18 17.67 18 19Z" />

        </Icon>
      );
    };
    BookAccountIcon.displayName = 'BookAccountIcon';
      