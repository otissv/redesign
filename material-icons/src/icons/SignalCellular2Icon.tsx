import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SignalCellular2Icon: FC<IconInterface> = function SignalCellular2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignalCellular2Icon ${className}`;
      return (
        <Icon alt="SignalCellular2" className={classNames} {...propsRest}>
          <path d="M19.5,5.5V18.5H17.5V5.5H19.5M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z" />

        </Icon>
      );
    };
    SignalCellular2Icon.displayName = 'SignalCellular2Icon';
      