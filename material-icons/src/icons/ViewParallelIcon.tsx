import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ViewParallelIcon: FC<IconInterface> = function ViewParallelIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewParallelIcon ${className}`;
      return (
        <Icon alt="ViewParallel" className={classNames} {...propsRest}>
          <path d="M19 3V21H15V3H19M14 3V21H10V3H14M9 3V21H5V3H9Z" />

        </Icon>
      );
    };
    ViewParallelIcon.displayName = 'ViewParallelIcon';
      