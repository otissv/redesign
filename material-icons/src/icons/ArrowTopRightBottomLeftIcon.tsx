import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowTopRightBottomLeftIcon: FC<IconInterface> = function ArrowTopRightBottomLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopRightBottomLeftIcon ${className}`;
      return (
        <Icon alt="ArrowTopRightBottomLeft" className={classNames} {...propsRest}>
          <path d="M11,21H3V13H5V17.59L17.59,5H13V3H21V11H19V6.41L6.41,19H11V21Z" />

        </Icon>
      );
    };
    ArrowTopRightBottomLeftIcon.displayName = 'ArrowTopRightBottomLeftIcon';
      