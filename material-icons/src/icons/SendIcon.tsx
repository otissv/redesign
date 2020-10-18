import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SendIcon: FC<IconInterface> = function SendIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SendIcon ${className}`;
      return (
        <Icon alt="Send" className={classNames} {...propsRest}>
          <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />

        </Icon>
      );
    };
    SendIcon.displayName = 'SendIcon';
      