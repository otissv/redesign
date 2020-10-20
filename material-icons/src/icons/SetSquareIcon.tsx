import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SetSquareIcon: FC<IconInterface> = function SetSquareIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SetSquareIcon ${className}`;
      return (
        <Icon alt="SetSquare" className={classNames} {...propsRest}>
          <path d="M17.7 17.7L16.6 18.8L15.9 18L17 17L15 15L14 16.1L13.3 15.4L14.4 14.3L12.5 12.4L11.4 13.5L10.7 12.8L11.8 11.7L9.8 9.8L8.7 10.9L8 10.2L9 9L7.1 7.1L6 8.1L5.3 7.4L6.4 6.3L4 4V20H20L17.7 17.7M7 17V11.2L12.8 17H7Z" />

        </Icon>
      );
    };
    SetSquareIcon.displayName = 'SetSquareIcon';
      