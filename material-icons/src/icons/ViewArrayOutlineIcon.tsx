import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewArrayOutlineIcon: FC<IconInterface> = function ViewArrayOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewArrayOutlineIcon ${className}`;
      return (
        <Icon alt="ViewArrayOutline" className={classNames} {...propsRest}>
          <path d="M15 7V16H10V7H15M21 5H18V18H21V5M17 5H8V18H17V5M7 5H4V18H7V5Z" />

        </Icon>
      );
    };
    ViewArrayOutlineIcon.displayName = 'ViewArrayOutlineIcon';
      