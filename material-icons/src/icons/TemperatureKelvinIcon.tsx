import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TemperatureKelvinIcon: FC<IconInterface> = function TemperatureKelvinIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TemperatureKelvinIcon ${className}`;
      return (
        <Icon alt="TemperatureKelvin" className={classNames} {...propsRest}>
          <path d="M7,5H10V11L15,5H19L13.88,10.78L19,20H15.38L11.76,13.17L10,15.15V20H7V5Z" />

        </Icon>
      );
    };
    TemperatureKelvinIcon.displayName = 'TemperatureKelvinIcon';
      