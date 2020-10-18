import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const NetworkStrength3AlertIcon: FC<IconInterface> = function NetworkStrength3AlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NetworkStrength3AlertIcon ${className}`;
      return (
        <Icon alt="NetworkStrength3Alert" className={classNames} {...propsRest}>
          <path d="M21,1L1,21H17V19H16V8.83L19,5.83V7H21M19,9V17H21V9M19,19V21H21V19" />

        </Icon>
      );
    };
    NetworkStrength3AlertIcon.displayName = 'NetworkStrength3AlertIcon';
      