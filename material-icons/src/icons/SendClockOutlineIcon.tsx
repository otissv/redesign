import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SendClockOutlineIcon: FC<IconInterface> = function SendClockOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SendClockOutlineIcon ${className}`;
      return (
        <Icon alt="SendClockOutline" className={classNames} {...propsRest}>
          <path d="M2 3V10L11 12L2 14V21L9.27 17.89A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 16 9L2 3M4 6.03L12.78 9.8A7 7 0 0 0 12.1 10.2L4 8.4V6.03M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12.5V16.5L18 18.5L18.75 17.25L16.5 15.75V12.5H15M9.18 14.45A7 7 0 0 0 9 15.82L4 17.97V15.6L9.18 14.45Z" />

        </Icon>
      );
    };
    SendClockOutlineIcon.displayName = 'SendClockOutlineIcon';
      