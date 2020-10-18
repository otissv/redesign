import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TransferLeftIcon: FC<IconInterface> = function TransferLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TransferLeftIcon ${className}`;
      return (
        <Icon alt="TransferLeft" className={classNames} {...propsRest}>
          <path d="M21,16H19V8H21V16M17,16H15V8H17V16M13,16H11V8H13V16M9,5V19L2,12L9,5Z" />

        </Icon>
      );
    };
    TransferLeftIcon.displayName = 'TransferLeftIcon';
      