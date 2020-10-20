import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowBottomRightThickIcon: FC<IconInterface> = function ArrowBottomRightThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowBottomRightThickIcon ${className}`;
      return (
        <Icon alt="ArrowBottomRightThick" className={classNames} {...propsRest}>
          <path d="M14.89,12.06V7.11H18.31V18.31H7.11V14.89H12.06L5.69,8.5L8.5,5.69L14.89,12.06Z" />

        </Icon>
      );
    };
    ArrowBottomRightThickIcon.displayName = 'ArrowBottomRightThickIcon';
      