import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowLeftRightBoldOutlineIcon: FC<IconInterface> = function ArrowLeftRightBoldOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftRightBoldOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowLeftRightBoldOutline" className={classNames} {...propsRest}>
          <path d="M14,16V22L24,12L14,2V8H10V2L0,12L10,22V16H14M8,14V17L3,12L8,7V10H16V7L21,12L16,17V14H8Z" />

        </Icon>
      );
    };
    ArrowLeftRightBoldOutlineIcon.displayName = 'ArrowLeftRightBoldOutlineIcon';
      