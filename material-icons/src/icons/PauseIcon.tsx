import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PauseIcon: FC<IconInterface> = function PauseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PauseIcon ${className}`;
      return (
        <Icon alt="Pause" className={classNames} {...propsRest}>
          <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />

        </Icon>
      );
    };
    PauseIcon.displayName = 'PauseIcon';
      