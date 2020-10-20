import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SendCircleIcon: FC<IconInterface> = function SendCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SendCircleIcon ${className}`;
      return (
        <Icon alt="SendCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M8,7.71V11.05L15.14,12L8,12.95V16.29L18,12L8,7.71Z" />

        </Icon>
      );
    };
    SendCircleIcon.displayName = 'SendCircleIcon';
      