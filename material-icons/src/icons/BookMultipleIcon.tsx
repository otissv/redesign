import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookMultipleIcon: FC<IconInterface> = function BookMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookMultipleIcon ${className}`;
      return (
        <Icon alt="BookMultiple" className={classNames} {...propsRest}>
          <path d="M19,18H9A2,2 0 0,1 7,16V4A2,2 0 0,1 9,2H10V7L12,5.5L14,7V2H19A2,2 0 0,1 21,4V16A2,2 0 0,1 19,18M17,20V22H5A2,2 0 0,1 3,20V6H5V20H17Z" />

        </Icon>
      );
    };
    BookMultipleIcon.displayName = 'BookMultipleIcon';
      