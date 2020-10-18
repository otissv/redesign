import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewColumnIcon: FC<IconInterface> = function ViewColumnIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewColumnIcon ${className}`;
      return (
        <Icon alt="ViewColumn" className={classNames} {...propsRest}>
          <path d="M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z" />

        </Icon>
      );
    };
    ViewColumnIcon.displayName = 'ViewColumnIcon';
      