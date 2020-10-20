import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowRightThickIcon: FC<IconInterface> = function ArrowRightThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightThickIcon ${className}`;
      return (
        <Icon alt="ArrowRightThick" className={classNames} {...propsRest}>
          <path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />

        </Icon>
      );
    };
    ArrowRightThickIcon.displayName = 'ArrowRightThickIcon';
      