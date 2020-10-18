import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WheelBarrowIcon: FC<IconInterface> = function WheelBarrowIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WheelBarrowIcon ${className}`;
      return (
        <Icon alt="WheelBarrow" className={classNames} {...propsRest}>
          <path d="M18 15.5C18.83 15.5 19.5 16.17 19.5 17S18.83 18.5 18 18.5 16.5 17.83 16.5 17 17.17 15.5 18 15.5M18 14C16.34 14 15 15.34 15 17S16.34 20 18 20C19.66 20 21 18.66 21 17S19.66 14 18 14M7 8L5 5H2V7H5.13L8 11.3V20H10L12.57 15H14.55C15.25 13.81 16.5 13 18 13C18.88 13 19.69 13.29 20.35 13.78L22 8H7M9.39 19H9V12.8L9.87 14.11C10.23 14.64 10.82 14.96 11.45 15L9.39 19Z" />

        </Icon>
      );
    };
    WheelBarrowIcon.displayName = 'WheelBarrowIcon';
      