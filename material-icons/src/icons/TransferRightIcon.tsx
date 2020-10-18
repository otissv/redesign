import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TransferRightIcon: FC<IconInterface> = function TransferRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TransferRightIcon ${className}`;
      return (
        <Icon alt="TransferRight" className={classNames} {...propsRest}>
          <path d="M3,8H5V16H3V8M7,8H9V16H7V8M11,8H13V16H11V8M15,19.25V4.75L22.25,12L15,19.25Z" />

        </Icon>
      );
    };
    TransferRightIcon.displayName = 'TransferRightIcon';
      