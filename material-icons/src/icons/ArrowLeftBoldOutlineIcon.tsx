import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowLeftBoldOutlineIcon: FC<IconInterface> = function ArrowLeftBoldOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftBoldOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowLeftBoldOutline" className={classNames} {...propsRest}>
          <path d="M13,22L3,12L13,2V8H21V16H13V22M6,12L11,17V14H19V10H11V7L6,12Z" />

        </Icon>
      );
    };
    ArrowLeftBoldOutlineIcon.displayName = 'ArrowLeftBoldOutlineIcon';
      