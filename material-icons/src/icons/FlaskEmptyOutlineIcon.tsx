import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlaskEmptyOutlineIcon: FC<IconInterface> = function FlaskEmptyOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlaskEmptyOutlineIcon ${className}`;
      return (
        <Icon alt="FlaskEmptyOutline" className={classNames} {...propsRest}>
          <path d="M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6Z" />

        </Icon>
      );
    };
    FlaskEmptyOutlineIcon.displayName = 'FlaskEmptyOutlineIcon';
      