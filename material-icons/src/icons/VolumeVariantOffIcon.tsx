import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const VolumeVariantOffIcon: FC<IconInterface> = function VolumeVariantOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VolumeVariantOffIcon ${className}`;
      return (
        <Icon alt="VolumeVariantOff" className={classNames} {...propsRest}>
          <path d="M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z" />

        </Icon>
      );
    };
    VolumeVariantOffIcon.displayName = 'VolumeVariantOffIcon';
      