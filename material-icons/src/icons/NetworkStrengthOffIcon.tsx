import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NetworkStrengthOffIcon: FC<IconInterface> = function NetworkStrengthOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NetworkStrengthOffIcon ${className}`;
      return (
        <Icon alt="NetworkStrengthOff" className={classNames} {...propsRest}>
          <path d="M21,1L12.4,9.6L21,18.19M4.77,4.5L3.5,5.77L9.86,12.13L1,21H18.73L20.73,23L22,21.73" />

        </Icon>
      );
    };
    NetworkStrengthOffIcon.displayName = 'NetworkStrengthOffIcon';
      