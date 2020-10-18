import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PauseOctagonIcon: FC<IconInterface> = function PauseOctagonIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PauseOctagonIcon ${className}`;
      return (
        <Icon alt="PauseOctagon" className={classNames} {...propsRest}>
          <path d="M15.73,3L21,8.27V15.73L15.73,21H8.27L3,15.73V8.27L8.27,3H15.73M15,16V8H13V16H15M11,16V8H9V16H11Z" />

        </Icon>
      );
    };
    PauseOctagonIcon.displayName = 'PauseOctagonIcon';
      