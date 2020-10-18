import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ThermometerMinusIcon: FC<IconInterface> = function ThermometerMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ThermometerMinusIcon ${className}`;
      return (
        <Icon alt="ThermometerMinus" className={classNames} {...propsRest}>
          <path d="M22 11H14V13H22V11M11 13V5C11 3.34 9.66 2 8 2S5 3.34 5 5V13C2.79 14.66 2.34 17.79 4 20S8.79 22.66 11 21 13.66 16.21 12 14C11.72 13.62 11.38 13.28 11 13M8 4C8.55 4 9 4.45 9 5V8H7V5C7 4.45 7.45 4 8 4Z" />

        </Icon>
      );
    };
    ThermometerMinusIcon.displayName = 'ThermometerMinusIcon';
      