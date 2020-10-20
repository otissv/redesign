import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowTopRightBoldOutlineIcon: FC<IconInterface> = function ArrowTopRightBoldOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopRightBoldOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowTopRightBoldOutline" className={classNames} {...propsRest}>
          <path d="M5.64,4.22H19.78V18.36L15.54,14.12L9.88,19.78L4.22,14.12L9.88,8.46L5.64,4.22M17.66,6.34H10.59L12.71,8.46L7.05,14.12L9.88,16.95L15.54,11.29L17.66,13.41V6.34H17.66Z" />

        </Icon>
      );
    };
    ArrowTopRightBoldOutlineIcon.displayName = 'ArrowTopRightBoldOutlineIcon';
      