import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewArrayIcon: FC<IconInterface> = function ViewArrayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewArrayIcon ${className}`;
      return (
        <Icon alt="ViewArray" className={classNames} {...propsRest}>
          <path d="M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z" />

        </Icon>
      );
    };
    ViewArrayIcon.displayName = 'ViewArrayIcon';
      