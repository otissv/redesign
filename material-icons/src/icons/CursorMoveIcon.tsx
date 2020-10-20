import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CursorMoveIcon: FC<IconInterface> = function CursorMoveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CursorMoveIcon ${className}`;
      return (
        <Icon alt="CursorMove" className={classNames} {...propsRest}>
          <path d="M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z" />

        </Icon>
      );
    };
    CursorMoveIcon.displayName = 'CursorMoveIcon';
      