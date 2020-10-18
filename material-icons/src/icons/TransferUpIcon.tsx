import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TransferUpIcon: FC<IconInterface> = function TransferUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TransferUpIcon ${className}`;
      return (
        <Icon alt="TransferUp" className={classNames} {...propsRest}>
          <path d="M8,21V19H16V21H8M8,17V15H16V17H8M8,13V11H16V13H8M19,9H5L12,2L19,9Z" />

        </Icon>
      );
    };
    TransferUpIcon.displayName = 'TransferUpIcon';
      