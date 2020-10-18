import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SquareRootBoxIcon: FC<IconInterface> = function SquareRootBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SquareRootBoxIcon ${className}`;
      return (
        <Icon alt="SquareRootBox" className={classNames} {...propsRest}>
          <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5M11.24,6H19V8H12.76L10,18H8L6.25,12H5V10H7.75L9,14.28L11.24,6V6M14,10.59L15.79,12.38L17.59,10.59L19,12L17.21,13.79L19,15.59L17.59,17L15.79,15.21L14,17L12.59,15.59L14.38,13.79L12.59,12L14,10.59Z" />

        </Icon>
      );
    };
    SquareRootBoxIcon.displayName = 'SquareRootBoxIcon';
      