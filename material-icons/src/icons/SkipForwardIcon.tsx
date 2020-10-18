import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SkipForwardIcon: FC<IconInterface> = function SkipForwardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipForwardIcon ${className}`;
      return (
        <Icon alt="SkipForward" className={classNames} {...propsRest}>
          <path d="M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12" />

        </Icon>
      );
    };
    SkipForwardIcon.displayName = 'SkipForwardIcon';
      