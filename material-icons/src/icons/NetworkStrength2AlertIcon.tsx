import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const NetworkStrength2AlertIcon: FC<IconInterface> = function NetworkStrength2AlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NetworkStrength2AlertIcon ${className}`;
      return (
        <Icon alt="NetworkStrength2Alert" className={classNames} {...propsRest}>
          <path d="M21,1L1,21H17V19H13V11.83L19,5.83V7H21M19,9V17H21V9M19,19V21H21V19" />

        </Icon>
      );
    };
    NetworkStrength2AlertIcon.displayName = 'NetworkStrength2AlertIcon';
      