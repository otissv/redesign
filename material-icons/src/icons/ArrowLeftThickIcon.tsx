import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowLeftThickIcon: FC<IconInterface> = function ArrowLeftThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftThickIcon ${className}`;
      return (
        <Icon alt="ArrowLeftThick" className={classNames} {...propsRest}>
          <path d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z" />

        </Icon>
      );
    };
    ArrowLeftThickIcon.displayName = 'ArrowLeftThickIcon';
      