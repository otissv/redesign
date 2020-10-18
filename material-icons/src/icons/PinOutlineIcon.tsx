import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PinOutlineIcon: FC<IconInterface> = function PinOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PinOutlineIcon ${className}`;
      return (
        <Icon alt="PinOutline" className={classNames} {...propsRest}>
          <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z" />

        </Icon>
      );
    };
    PinOutlineIcon.displayName = 'PinOutlineIcon';
      