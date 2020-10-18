import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WeatherTornadoIcon: FC<IconInterface> = function WeatherTornadoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WeatherTornadoIcon ${className}`;
      return (
        <Icon alt="WeatherTornado" className={classNames} {...propsRest}>
          <path d="M21,5H3A1,1 0 0,1 2,4A1,1 0 0,1 3,3H21A1,1 0 0,1 22,4A1,1 0 0,1 21,5M20,8A1,1 0 0,0 19,7H5A1,1 0 0,0 4,8A1,1 0 0,0 5,9H19A1,1 0 0,0 20,8M21,12A1,1 0 0,0 20,11H10A1,1 0 0,0 9,12A1,1 0 0,0 10,13H20A1,1 0 0,0 21,12M16,16A1,1 0 0,0 15,15H9A1,1 0 0,0 8,16A1,1 0 0,0 9,17H15A1,1 0 0,0 16,16M13,20A1,1 0 0,0 12,19H10A1,1 0 0,0 9,20A1,1 0 0,0 10,21H12A1,1 0 0,0 13,20Z" />

        </Icon>
      );
    };
    WeatherTornadoIcon.displayName = 'WeatherTornadoIcon';
      