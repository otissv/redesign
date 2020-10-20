import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ViewParallelOutlineIcon: FC<IconInterface> = function ViewParallelOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewParallelOutlineIcon ${className}`;
      return (
        <Icon alt="ViewParallelOutline" className={classNames} {...propsRest}>
          <path d="M19 3H5V21H19V3M17 19H15V5H17V19M13 19H11V5H13V19M7 5H9V19H7V5Z" />

        </Icon>
      );
    };
    ViewParallelOutlineIcon.displayName = 'ViewParallelOutlineIcon';
      