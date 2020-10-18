import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SkipBackwardIcon: FC<IconInterface> = function SkipBackwardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipBackwardIcon ${className}`;
      return (
        <Icon alt="SkipBackward" className={classNames} {...propsRest}>
          <path d="M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12" />

        </Icon>
      );
    };
    SkipBackwardIcon.displayName = 'SkipBackwardIcon';
      