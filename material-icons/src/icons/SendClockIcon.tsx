import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SendClockIcon: FC<IconInterface> = function SendClockIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SendClockIcon ${className}`;
      return (
        <Icon alt="SendClock" className={classNames} {...propsRest}>
          <path d="M2 3V10L11 12L2 14V21L9.27 17.89A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 16 9L2 3M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12.5V16.5L18 18.5L18.75 17.25L16.5 15.75V12.5H15Z" />

        </Icon>
      );
    };
    SendClockIcon.displayName = 'SendClockIcon';
      