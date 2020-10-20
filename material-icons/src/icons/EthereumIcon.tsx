import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EthereumIcon: FC<IconInterface> = function EthereumIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EthereumIcon ${className}`;
      return (
        <Icon alt="Ethereum" className={classNames} {...propsRest}>
          <path d="M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z" />

        </Icon>
      );
    };
    EthereumIcon.displayName = 'EthereumIcon';
      