import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TriangleWaveIcon: FC<IconInterface> = function TriangleWaveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TriangleWaveIcon ${className}`;
      return (
        <Icon alt="TriangleWave" className={classNames} {...propsRest}>
          <path d="M22 12L17 22L7.1 6.04L4.24 12H2L7 2L16.9 17.96L19.76 12H22Z" />

        </Icon>
      );
    };
    TriangleWaveIcon.displayName = 'TriangleWaveIcon';
      