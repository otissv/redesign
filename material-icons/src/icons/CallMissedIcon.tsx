import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CallMissedIcon: FC<IconInterface> = function CallMissedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CallMissedIcon ${className}`;
      return (
        <Icon alt="CallMissed" className={classNames} {...propsRest}>
          <path d="M19.59,7L12,14.59L6.41,9H11V7H3V15H5V10.41L12,17.41L21,8.41" />

        </Icon>
      );
    };
    CallMissedIcon.displayName = 'CallMissedIcon';
      