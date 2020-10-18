import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowExpandDownIcon: FC<IconInterface> = function ArrowExpandDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowExpandDownIcon ${className}`;
      return (
        <Icon alt="ArrowExpandDown" className={classNames} {...propsRest}>
          <path d="M22,4V2H2V4H11V18.17L5.5,12.67L4.08,14.08L12,22L19.92,14.08L18.5,12.67L13,18.17V4H22Z" />

        </Icon>
      );
    };
    ArrowExpandDownIcon.displayName = 'ArrowExpandDownIcon';
      