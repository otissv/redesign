import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowTopLeftIcon: FC<IconInterface> = function ArrowTopLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopLeftIcon ${className}`;
      return (
        <Icon alt="ArrowTopLeft" className={classNames} {...propsRest}>
          <path d="M19,17.59L17.59,19L7,8.41V15H5V5H15V7H8.41L19,17.59Z" />

        </Icon>
      );
    };
    ArrowTopLeftIcon.displayName = 'ArrowTopLeftIcon';
      