import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WeatherHurricaneIcon: FC<IconInterface> = function WeatherHurricaneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WeatherHurricaneIcon ${className}`;
      return (
        <Icon alt="WeatherHurricane" className={classNames} {...propsRest}>
          <path d="M15,6.79C16.86,7.86 18,9.85 18,12C18,22 6,22 6,22C7.25,21.06 8.38,19.95 9.34,18.71C9.38,18.66 9.41,18.61 9.44,18.55C9.69,18.06 9.5,17.46 9,17.21C7.14,16.14 6,14.15 6,12C6,2 18,2 18,2C16.75,2.94 15.62,4.05 14.66,5.29C14.62,5.34 14.59,5.39 14.56,5.45C14.31,5.94 14.5,6.54 15,6.79M12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14Z" />

        </Icon>
      );
    };
    WeatherHurricaneIcon.displayName = 'WeatherHurricaneIcon';
      