import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BookAccountOutlineIcon: FC<IconInterface> = function BookAccountOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookAccountOutlineIcon ${className}`;
      return (
        <Icon alt="BookAccountOutline" className={classNames} {...propsRest}>
          <path d="M18 2A2 2 0 0 1 20 4V20A2 2 0 0 1 18 22H6A2 2 0 0 1 4 20V4A2 2 0 0 1 6 2H18M18 4H13V9L10.5 6.7L8 9V4H6V20H18M13 11A2 2 0 1 1 11 13A2 2 0 0 1 13 11M17 19H9V18C9 16.67 11.67 16 13 16S17 16.67 17 18V19" />

        </Icon>
      );
    };
    BookAccountOutlineIcon.displayName = 'BookAccountOutlineIcon';
      