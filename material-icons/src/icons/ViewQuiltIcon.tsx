import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewQuiltIcon: FC<IconInterface> = function ViewQuiltIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewQuiltIcon ${className}`;
      return (
        <Icon alt="ViewQuilt" className={classNames} {...propsRest}>
          <path d="M10,5V11H21V5M16,18H21V12H16M4,18H9V5H4M10,18H15V12H10V18Z" />

        </Icon>
      );
    };
    ViewQuiltIcon.displayName = 'ViewQuiltIcon';
      