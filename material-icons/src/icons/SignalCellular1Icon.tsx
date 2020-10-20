import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SignalCellular1Icon: FC<IconInterface> = function SignalCellular1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignalCellular1Icon ${className}`;
      return (
        <Icon alt="SignalCellular1" className={classNames} {...propsRest}>
          <path d="M19.5,5.5V18.5H17.5V5.5H19.5M12.5,10.5V18.5H10.5V10.5H12.5M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z" />

        </Icon>
      );
    };
    SignalCellular1Icon.displayName = 'SignalCellular1Icon';
      