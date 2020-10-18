import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const NetworkStrength4AlertIcon: FC<IconInterface> = function NetworkStrength4AlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NetworkStrength4AlertIcon ${className}`;
      return (
        <Icon alt="NetworkStrength4Alert" className={classNames} {...propsRest}>
          <path d="M19,17H21V9H19M19,21H21V19H19M1,21H17V7H21V1" />

        </Icon>
      );
    };
    NetworkStrength4AlertIcon.displayName = 'NetworkStrength4AlertIcon';
      