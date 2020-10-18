import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowExpandRightIcon: FC<IconInterface> = function ArrowExpandRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowExpandRightIcon ${className}`;
      return (
        <Icon alt="ArrowExpandRight" className={classNames} {...propsRest}>
          <path d="M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z" />

        </Icon>
      );
    };
    ArrowExpandRightIcon.displayName = 'ArrowExpandRightIcon';
      