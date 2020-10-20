import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SendCheckIcon: FC<IconInterface> = function SendCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SendCheckIcon ${className}`;
      return (
        <Icon alt="SendCheck" className={classNames} {...propsRest}>
          <path d="M2 3V10L17 12L2 14V21L23 12M22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17Z" />

        </Icon>
      );
    };
    SendCheckIcon.displayName = 'SendCheckIcon';
      