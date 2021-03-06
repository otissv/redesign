import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookMinusMultipleIcon: FC<IconInterface> = function BookMinusMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookMinusMultipleIcon ${className}`;
      return (
        <Icon alt="BookMinusMultiple" className={classNames} {...propsRest}>
          <path d="M5 20V6H3V20A2 2 0 0 0 5 22H13V20M19 2H14V7L12 5.5L10 7V2H9A2 2 0 0 0 7 4V16A2 2 0 0 0 9 18H13V16H21V4A2 2 0 0 0 19 2M23 20H15V18H23Z" />

        </Icon>
      );
    };
    BookMinusMultipleIcon.displayName = 'BookMinusMultipleIcon';
      