import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowUpThickIcon: FC<IconInterface> = function ArrowUpThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpThickIcon ${className}`;
      return (
        <Icon alt="ArrowUpThick" className={classNames} {...propsRest}>
          <path d="M14,20H10V11L6.5,14.5L4.08,12.08L12,4.16L19.92,12.08L17.5,14.5L14,11V20Z" />

        </Icon>
      );
    };
    ArrowUpThickIcon.displayName = 'ArrowUpThickIcon';
      