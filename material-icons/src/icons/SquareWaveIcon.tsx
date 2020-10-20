import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SquareWaveIcon: FC<IconInterface> = function SquareWaveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SquareWaveIcon ${className}`;
      return (
        <Icon alt="SquareWave" className={classNames} {...propsRest}>
          <path d="M2 2V12H4V4H11V22H22V12H20V20H13V2H2Z" />

        </Icon>
      );
    };
    SquareWaveIcon.displayName = 'SquareWaveIcon';
      