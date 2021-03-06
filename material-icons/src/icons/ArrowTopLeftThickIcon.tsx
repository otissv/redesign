import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowTopLeftThickIcon: FC<IconInterface> = function ArrowTopLeftThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopLeftThickIcon ${className}`;
      return (
        <Icon alt="ArrowTopLeftThick" className={classNames} {...propsRest}>
          <path d="M9.12,11.94V16.89H5.69V5.69H16.89V9.12H11.94L18.31,15.5L15.5,18.31L9.12,11.94Z" />

        </Icon>
      );
    };
    ArrowTopLeftThickIcon.displayName = 'ArrowTopLeftThickIcon';
      