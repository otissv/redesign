import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CashRefundIcon: FC<IconInterface> = function CashRefundIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CashRefundIcon ${className}`;
      return (
        <Icon alt="CashRefund" className={classNames} {...propsRest}>
          <path d="M3,11H21V23H3V11M12,15A2,2 0 0,1 14,17A2,2 0 0,1 12,19A2,2 0 0,1 10,17A2,2 0 0,1 12,15M7,13A2,2 0 0,1 5,15V19A2,2 0 0,1 7,21H17A2,2 0 0,1 19,19V15A2,2 0 0,1 17,13H7M17,5V10H15.5V6.5H9.88L12.3,8.93L11.24,10L7,5.75L11.24,1.5L12.3,2.57L9.88,5H17Z" />

        </Icon>
      );
    };
    CashRefundIcon.displayName = 'CashRefundIcon';
      