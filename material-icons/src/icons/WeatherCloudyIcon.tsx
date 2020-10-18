import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WeatherCloudyIcon: FC<IconInterface> = function WeatherCloudyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WeatherCloudyIcon ${className}`;
      return (
        <Icon alt="WeatherCloudy" className={classNames} {...propsRest}>
          <path d="M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z" />

        </Icon>
      );
    };
    WeatherCloudyIcon.displayName = 'WeatherCloudyIcon';
      