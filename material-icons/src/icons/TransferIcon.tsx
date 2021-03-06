import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TransferIcon: FC<IconInterface> = function TransferIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TransferIcon ${className}`;
      return (
        <Icon alt="Transfer" className={classNames} {...propsRest}>
          <path d="M8 4A2 2 0 0 0 6 6V10H8V6H16V9H13.5L17 12.5L20.5 9H18V6A2 2 0 0 0 16 4H8M3 12V14H11V12H3M3 15V17H11V15H3M13 15V17H21V15H13M3 18V20H11V18H3M13 18V20H21V18H13Z" />

        </Icon>
      );
    };
    TransferIcon.displayName = 'TransferIcon';
      