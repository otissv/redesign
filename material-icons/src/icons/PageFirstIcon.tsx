import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PageFirstIcon: FC<IconInterface> = function PageFirstIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PageFirstIcon ${className}`;
      return (
        <Icon alt="PageFirst" className={classNames} {...propsRest}>
          <path d="M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z" />

        </Icon>
      );
    };
    PageFirstIcon.displayName = 'PageFirstIcon';
      