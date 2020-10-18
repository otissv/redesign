import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowExpandLeftIcon: FC<IconInterface> = function ArrowExpandLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowExpandLeftIcon ${className}`;
      return (
        <Icon alt="ArrowExpandLeft" className={classNames} {...propsRest}>
          <path d="M20,22H22V2H20V11H5.83L11.33,5.5L9.92,4.08L2,12L9.92,19.92L11.33,18.5L5.83,13H20V22Z" />

        </Icon>
      );
    };
    ArrowExpandLeftIcon.displayName = 'ArrowExpandLeftIcon';
      