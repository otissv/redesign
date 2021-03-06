import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowRightBoldCircleIcon: FC<IconInterface> = function ArrowRightBoldCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightBoldCircleIcon ${className}`;
      return (
        <Icon alt="ArrowRightBoldCircle" className={classNames} {...propsRest}>
          <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M17,12L12,7V10H8V14H12V17L17,12Z" />

        </Icon>
      );
    };
    ArrowRightBoldCircleIcon.displayName = 'ArrowRightBoldCircleIcon';
      