import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SignalCellular3Icon: FC<IconInterface> = function SignalCellular3Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignalCellular3Icon ${className}`;
      return (
        <Icon alt="SignalCellular3" className={classNames} {...propsRest}>
          <path d="M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z" />

        </Icon>
      );
    };
    SignalCellular3Icon.displayName = 'SignalCellular3Icon';
      