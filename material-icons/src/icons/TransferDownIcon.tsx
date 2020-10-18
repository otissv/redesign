import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TransferDownIcon: FC<IconInterface> = function TransferDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TransferDownIcon ${className}`;
      return (
        <Icon alt="TransferDown" className={classNames} {...propsRest}>
          <path d="M16,3V5H8V3H16M16,7V9H8V7H16M16,11V13H8V11H16M5,15H19L12,22L5,15Z" />

        </Icon>
      );
    };
    TransferDownIcon.displayName = 'TransferDownIcon';
      