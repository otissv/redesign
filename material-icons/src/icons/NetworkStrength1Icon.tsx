import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NetworkStrength1Icon: FC<IconInterface> = function NetworkStrength1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `NetworkStrength1Icon ${className}`;
      return (
        <Icon alt="NetworkStrength1" className={classNames} {...propsRest}>
          <path d="M1,21H21V1M19,5.83V19H11V13.83" />

        </Icon>
      );
    };
    NetworkStrength1Icon.displayName = 'NetworkStrength1Icon';
      