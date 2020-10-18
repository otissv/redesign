import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChessRookIcon: FC<IconInterface> = function ChessRookIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChessRookIcon ${className}`;
      return (
        <Icon alt="ChessRook" className={classNames} {...propsRest}>
          <path d="M5,20H19V22H5V20M17,2V5H15V2H13V5H11V2H9V5H7V2H5V8H7V18H17V8H19V2H17Z" />

        </Icon>
      );
    };
    ChessRookIcon.displayName = 'ChessRookIcon';
      