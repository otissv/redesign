import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewColumnOutlineIcon: FC<IconInterface> = function ViewColumnOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewColumnOutlineIcon ${className}`;
      return (
        <Icon alt="ViewColumnOutline" className={classNames} {...propsRest}>
          <path d="M4 5V18H21V5H4M14 7V16H11V7H14M6 7H9V16H6V7M19 16H16V7H19V16Z" />

        </Icon>
      );
    };
    ViewColumnOutlineIcon.displayName = 'ViewColumnOutlineIcon';
      