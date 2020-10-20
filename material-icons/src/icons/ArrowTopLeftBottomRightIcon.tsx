import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowTopLeftBottomRightIcon: FC<IconInterface> = function ArrowTopLeftBottomRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopLeftBottomRightIcon ${className}`;
      return (
        <Icon alt="ArrowTopLeftBottomRight" className={classNames} {...propsRest}>
          <path d="M13,21H21V13H19V17.59L6.41,5H11V3H3V11H5V6.41L17.59,19H13V21Z" />

        </Icon>
      );
    };
    ArrowTopLeftBottomRightIcon.displayName = 'ArrowTopLeftBottomRightIcon';
      