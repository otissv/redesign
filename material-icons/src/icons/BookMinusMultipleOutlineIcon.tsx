import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookMinusMultipleOutlineIcon: FC<IconInterface> = function BookMinusMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookMinusMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="BookMinusMultipleOutline" className={classNames} {...propsRest}>
          <path d="M5 20V6H3V20A2 2 0 0 0 5 22H13V20M19 2H9A2 2 0 0 0 7 4V16A2 2 0 0 0 9 18H13V16H9V4H11V10L13.5 7.75L16 10V4H19V16H21V4A2 2 0 0 0 19 2M23 20H15V18H23Z" />

        </Icon>
      );
    };
    BookMinusMultipleOutlineIcon.displayName = 'BookMinusMultipleOutlineIcon';
      