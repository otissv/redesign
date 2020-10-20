import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NetworkStrength3Icon: FC<IconInterface> = function NetworkStrength3Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `NetworkStrength3Icon ${className}`;
      return (
        <Icon alt="NetworkStrength3" className={classNames} {...propsRest}>
          <path d="M1,21H21V1M19,5.83V19H16V8.83" />

        </Icon>
      );
    };
    NetworkStrength3Icon.displayName = 'NetworkStrength3Icon';
      