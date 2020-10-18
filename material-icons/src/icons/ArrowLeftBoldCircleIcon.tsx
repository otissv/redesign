import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowLeftBoldCircleIcon: FC<IconInterface> = function ArrowLeftBoldCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftBoldCircleIcon ${className}`;
      return (
        <Icon alt="ArrowLeftBoldCircle" className={classNames} {...propsRest}>
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M7,12L12,17V14H16V10H12V7L7,12Z" />

        </Icon>
      );
    };
    ArrowLeftBoldCircleIcon.displayName = 'ArrowLeftBoldCircleIcon';
      