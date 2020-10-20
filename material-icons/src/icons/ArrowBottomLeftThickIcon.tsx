import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowBottomLeftThickIcon: FC<IconInterface> = function ArrowBottomLeftThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowBottomLeftThickIcon ${className}`;
      return (
        <Icon alt="ArrowBottomLeftThick" className={classNames} {...propsRest}>
          <path d="M15.5,5.69L18.31,8.5L11.94,14.89H16.89V18.31H5.69V7.11H9.12V12.06L15.5,5.69Z" />

        </Icon>
      );
    };
    ArrowBottomLeftThickIcon.displayName = 'ArrowBottomLeftThickIcon';
      