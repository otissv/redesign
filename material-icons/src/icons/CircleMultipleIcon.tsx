import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CircleMultipleIcon: FC<IconInterface> = function CircleMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CircleMultipleIcon ${className}`;
      return (
        <Icon alt="CircleMultiple" className={classNames} {...propsRest}>
          <path d="M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z" />

        </Icon>
      );
    };
    CircleMultipleIcon.displayName = 'CircleMultipleIcon';
      