import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SkipBackwardOutlineIcon: FC<IconInterface> = function SkipBackwardOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipBackwardOutlineIcon ${className}`;
      return (
        <Icon alt="SkipBackwardOutline" className={classNames} {...propsRest}>
          <path d="M18,14.17L15.83,12L18,9.83V14.17M20,19V5L13,12M4,19H6V5H4M11,14.17L8.83,12L11,9.83V14.17M13,19V5L6,12" />

        </Icon>
      );
    };
    SkipBackwardOutlineIcon.displayName = 'SkipBackwardOutlineIcon';
      