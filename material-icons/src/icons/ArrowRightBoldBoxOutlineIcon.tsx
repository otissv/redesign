import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowRightBoldBoxOutlineIcon: FC<IconInterface> = function ArrowRightBoldBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightBoldBoxOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowRightBoldBoxOutline" className={classNames} {...propsRest}>
          <path d="M17,12L12,17V14H8V10H12V7L17,12M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M5,19H19V5H5V19Z" />

        </Icon>
      );
    };
    ArrowRightBoldBoxOutlineIcon.displayName = 'ArrowRightBoldBoxOutlineIcon';
      