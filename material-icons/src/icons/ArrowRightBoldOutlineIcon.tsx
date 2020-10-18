import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowRightBoldOutlineIcon: FC<IconInterface> = function ArrowRightBoldOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightBoldOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowRightBoldOutline" className={classNames} {...propsRest}>
          <path d="M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z" />

        </Icon>
      );
    };
    ArrowRightBoldOutlineIcon.displayName = 'ArrowRightBoldOutlineIcon';
      