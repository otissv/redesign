import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BankTransferOutIcon: FC<IconInterface> = function BankTransferOutIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BankTransferOutIcon ${className}`;
      return (
        <Icon alt="BankTransferOut" className={classNames} {...propsRest}>
          <path d="M15,15V12H18V10L22,13.5L18,17V15H15M14,8.7V10H2V8.7L8,5L14,8.7M2,17H14V19H2V17M7,11H9V16H7V11M3,11H5V16H3V11M11,11H13V16H11V11Z" />

        </Icon>
      );
    };
    BankTransferOutIcon.displayName = 'BankTransferOutIcon';
      