import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GolfIcon: FC<IconInterface> = function GolfIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GolfIcon ${className}`;
      return (
        <Icon alt="Golf" className={classNames} {...propsRest}>
          <path d="M19.5,18A1.5,1.5 0 0,1 21,19.5A1.5,1.5 0 0,1 19.5,21A1.5,1.5 0 0,1 18,19.5A1.5,1.5 0 0,1 19.5,18M17,5.92L11,9V18.03C13.84,18.19 16,19 16,20C16,21.1 13.31,22 10,22C6.69,22 4,21.1 4,20C4,19.26 5.21,18.62 7,18.27V20H9V2L17,5.92Z" />

        </Icon>
      );
    };
    GolfIcon.displayName = 'GolfIcon';
      