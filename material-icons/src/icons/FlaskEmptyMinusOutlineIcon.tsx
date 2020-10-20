import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlaskEmptyMinusOutlineIcon: FC<IconInterface> = function FlaskEmptyMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlaskEmptyMinusOutlineIcon ${className}`;
      return (
        <Icon alt="FlaskEmptyMinusOutline" className={classNames} {...propsRest}>
          <path d="M23 17V19H15V17H23M5 19C5 19.55 5.45 20 6 20H13.34C13.61 20.75 14 21.42 14.53 22H6C4.34 22 3 20.66 3 19C3 18.4 3.18 17.84 3.5 17.36L9 7.81V6C8.45 6 8 5.55 8 5V4C8 2.9 8.9 2 10 2H14C15.11 2 16 2.9 16 4V5C16 5.55 15.55 6 15 6V7.81L17.5 12.18C16.86 12.35 16.24 12.63 15.69 13L13 8.35V4H11V8.35L5.18 18.43C5.07 18.59 5 18.79 5 19Z" />

        </Icon>
      );
    };
    FlaskEmptyMinusOutlineIcon.displayName = 'FlaskEmptyMinusOutlineIcon';
      