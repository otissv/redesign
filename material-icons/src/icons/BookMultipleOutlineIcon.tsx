import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookMultipleOutlineIcon: FC<IconInterface> = function BookMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="BookMultipleOutline" className={classNames} {...propsRest}>
          <path d="M19 2A2 2 0 0 1 21 4V16A2 2 0 0 1 19 18H9A2 2 0 0 1 7 16V4A2 2 0 0 1 9 2H19M19 4H16V10L13.5 7.75L11 10V4H9V16H19M3 20A2 2 0 0 0 5 22H17V20H5V6H3Z" />

        </Icon>
      );
    };
    BookMultipleOutlineIcon.displayName = 'BookMultipleOutlineIcon';
      