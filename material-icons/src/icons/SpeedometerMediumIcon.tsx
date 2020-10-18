import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SpeedometerMediumIcon: FC<IconInterface> = function SpeedometerMediumIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SpeedometerMediumIcon ${className}`;
      return (
        <Icon alt="SpeedometerMedium" className={classNames} {...propsRest}>
          <path d="M12 1.38L9.14 12.06C8.8 13.1 9.04 14.29 9.86 15.12C11.04 16.29 12.94 16.29 14.11 15.12C14.9 14.33 15.16 13.2 14.89 12.21M14.6 3.35L15.22 5.68C18.04 6.92 20 9.73 20 13C20 15.21 19.11 17.21 17.66 18.65H17.65C17.26 19.04 17.26 19.67 17.65 20.06C18.04 20.45 18.68 20.45 19.07 20.07C20.88 18.26 22 15.76 22 13C22 8.38 18.86 4.5 14.6 3.35M9.4 3.36C5.15 4.5 2 8.4 2 13C2 15.76 3.12 18.26 4.93 20.07C5.32 20.45 5.95 20.45 6.34 20.06C6.73 19.67 6.73 19.04 6.34 18.65C4.89 17.2 4 15.21 4 13C4 9.65 5.94 6.86 8.79 5.65" />

        </Icon>
      );
    };
    SpeedometerMediumIcon.displayName = 'SpeedometerMediumIcon';
      