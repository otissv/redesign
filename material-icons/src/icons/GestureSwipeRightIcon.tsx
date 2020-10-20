import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GestureSwipeRightIcon: FC<IconInterface> = function GestureSwipeRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GestureSwipeRightIcon ${className}`;
      return (
        <Icon alt="GestureSwipeRight" className={classNames} {...propsRest}>
          <path d="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M12,4L9,1V3H3V5H9V7L12,4Z" />

        </Icon>
      );
    };
    GestureSwipeRightIcon.displayName = 'GestureSwipeRightIcon';
      