import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewStreamIcon: FC<IconInterface> = function ViewStreamIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewStreamIcon ${className}`;
      return (
        <Icon alt="ViewStream" className={classNames} {...propsRest}>
          <path d="M4,5V11H21V5M4,18H21V12H4V18Z" />

        </Icon>
      );
    };
    ViewStreamIcon.displayName = 'ViewStreamIcon';
      