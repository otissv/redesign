import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookPlusMultipleOutlineIcon: FC<IconInterface> = function BookPlusMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookPlusMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="BookPlusMultipleOutline" className={classNames} {...propsRest}>
          <path d="M13.09 20H5V6H3V20A2 2 0 0 0 5 22H13.81A5.5 5.5 0 0 1 13.09 20M19 2H9A2 2 0 0 0 7 4V16A2 2 0 0 0 9 18H13.09A5.5 5.5 0 0 1 13.81 16H9V4H11V10L13.5 7.75L16 10V4H19V13A6 6 0 0 1 21 13.34V4A2 2 0 0 0 19 2M20 15V18H23V20H20V23H18V20H15V18H18V15Z" />

        </Icon>
      );
    };
    BookPlusMultipleOutlineIcon.displayName = 'BookPlusMultipleOutlineIcon';
      