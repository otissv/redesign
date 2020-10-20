import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NetworkStrengthOffOutlineIcon: FC<IconInterface> = function NetworkStrengthOffOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NetworkStrengthOffOutlineIcon ${className}`;
      return (
        <Icon alt="NetworkStrengthOffOutline" className={classNames} {...propsRest}>
          <path d="M21,1L12.4,9.6L13.85,11.05L19,5.83V16.19L21,18.19M4.77,4.5L3.5,5.77L9.86,12.13L1,21H18.73L20.73,23L22,21.73M11.33,13.6L16.73,19H6" />

        </Icon>
      );
    };
    NetworkStrengthOffOutlineIcon.displayName = 'NetworkStrengthOffOutlineIcon';
      