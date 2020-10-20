import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookMinusIcon: FC<IconInterface> = function BookMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookMinusIcon ${className}`;
      return (
        <Icon alt="BookMinus" className={classNames} {...propsRest}>
          <path d="M18,22H6A2,2 0 0,1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22M18,18V16H12V18H18Z" />

        </Icon>
      );
    };
    BookMinusIcon.displayName = 'BookMinusIcon';
      