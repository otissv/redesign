import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TuneIcon: FC<IconInterface> = function TuneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TuneIcon ${className}`;
      return (
        <Icon alt="Tune" className={classNames} {...propsRest}>
          <path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" />

        </Icon>
      );
    };
    TuneIcon.displayName = 'TuneIcon';
      