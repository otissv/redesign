import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeThermometerIcon: FC<IconInterface> = function HomeThermometerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeThermometerIcon ${className}`;
      return (
        <Icon alt="HomeThermometer" className={classNames} {...propsRest}>
          <path d="M12 3L2 12H5V20H19V12H22L12 3M12 8A1 1 0 0 1 13 9V14.27A2 2 0 0 1 14 16A2 2 0 0 1 12 18A2 2 0 0 1 10 16A2 2 0 0 1 11 14.27V9A1 1 0 0 1 12 8Z" />

        </Icon>
      );
    };
    HomeThermometerIcon.displayName = 'HomeThermometerIcon';
      