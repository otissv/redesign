import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PinIcon: FC<IconInterface> = function PinIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PinIcon ${className}`;
      return (
        <Icon alt="Pin" className={classNames} {...propsRest}>
          <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />

        </Icon>
      );
    };
    PinIcon.displayName = 'PinIcon';
      