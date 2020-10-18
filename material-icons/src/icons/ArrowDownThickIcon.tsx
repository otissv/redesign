import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowDownThickIcon: FC<IconInterface> = function ArrowDownThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownThickIcon ${className}`;
      return (
        <Icon alt="ArrowDownThick" className={classNames} {...propsRest}>
          <path d="M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z" />

        </Icon>
      );
    };
    ArrowDownThickIcon.displayName = 'ArrowDownThickIcon';
      