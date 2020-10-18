import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BookRemoveIcon: FC<IconInterface> = function BookRemoveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookRemoveIcon ${className}`;
      return (
        <Icon alt="BookRemove" className={classNames} {...propsRest}>
          <path d="M18,22H6A2,2 0 0,1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22M16.41,19.83L17.83,18.41L16.41,17L17.83,15.59L16.41,14.17L15,15.59L13.59,14.17L12.17,15.59L13.59,17L12.17,18.41L13.59,19.83L15,18.41L16.41,19.83Z" />

        </Icon>
      );
    };
    BookRemoveIcon.displayName = 'BookRemoveIcon';
      