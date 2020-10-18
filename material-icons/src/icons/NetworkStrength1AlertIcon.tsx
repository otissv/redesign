import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const NetworkStrength1AlertIcon: FC<IconInterface> = function NetworkStrength1AlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NetworkStrength1AlertIcon ${className}`;
      return (
        <Icon alt="NetworkStrength1Alert" className={classNames} {...propsRest}>
          <path d="M21,1L1,21H17V19H11V13.83L19,5.83V7H21M19,9V17H21V9M19,19V21H21V19" />

        </Icon>
      );
    };
    NetworkStrength1AlertIcon.displayName = 'NetworkStrength1AlertIcon';
      