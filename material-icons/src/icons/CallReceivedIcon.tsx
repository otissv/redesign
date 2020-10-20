import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CallReceivedIcon: FC<IconInterface> = function CallReceivedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CallReceivedIcon ${className}`;
      return (
        <Icon alt="CallReceived" className={classNames} {...propsRest}>
          <path d="M20,5.41L18.59,4L7,15.59V9H5V19H15V17H8.41" />

        </Icon>
      );
    };
    CallReceivedIcon.displayName = 'CallReceivedIcon';
      