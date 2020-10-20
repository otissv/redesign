import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SawtoothWaveIcon: FC<IconInterface> = function SawtoothWaveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SawtoothWaveIcon ${className}`;
      return (
        <Icon alt="SawtoothWave" className={classNames} {...propsRest}>
          <path d="M11 22V6.83L2 16V13.17L13 2V17.17L22 8V10.83L11 22Z" />

        </Icon>
      );
    };
    SawtoothWaveIcon.displayName = 'SawtoothWaveIcon';
      