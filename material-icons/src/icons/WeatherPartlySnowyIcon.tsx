import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WeatherPartlySnowyIcon: FC<IconInterface> = function WeatherPartlySnowyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WeatherPartlySnowyIcon ${className}`;
      return (
        <Icon alt="WeatherPartlySnowy" className={classNames} {...propsRest}>
          <path d="M6,19.03A2,2 0 0,1 4,17.03C4,15.92 4.9,15.03 6,15.03H8C8,12.81 9.79,11.03 12,11.03A4,4 0 0,1 16,15.03V17.03H19A1,1 0 0,1 20,18.03C20,18.57 19.55,19.03 19,19.03H17C17,19.03 16,19.03 16,20.03C16,21.03 17,21.03 17,21.03H19A3,3 0 0,0 22,18.03C22,16.37 20.66,15.03 19,15.03C18.65,15.03 18.31,15.08 18,15.19V15.03C18,13.21 17.19,11.58 15.92,10.5C16.35,8.05 15.1,5.53 12.75,4.5C9.97,3.27 6.72,4.53 5.5,7.28C4.6,9.27 5,11.47 6.27,13.03H6C3.79,13.03 2,14.81 2,17.03A4,4 0 0,0 6,21.03C6,21.03 7,21.03 7,20.03C7,19.03 6,19.03 6,19.03M12,9.03C10.16,9.03 8.5,9.85 7.41,11.16C6.93,10.25 6.85,9.11 7.31,8.09C8.09,6.33 10.16,5.53 11.93,6.32C13.18,6.89 13.94,8.08 14,9.37C13.38,9.15 12.7,9.03 12,9.03M13.55,2.66C13,2.42 12.45,2.26 11.88,2.15L14.37,0.84L15.27,3.73C14.76,3.31 14.19,2.95 13.55,2.66M6.09,3.46C5.6,3.81 5.17,4.21 4.8,4.66L4.91,1.84L7.87,2.53C7.25,2.73 6.65,3.05 6.09,3.46M18,8.73C17.91,8.15 17.78,7.57 17.59,7.03L19.97,8.53L17.92,10.76C18.03,10.1 18.05,9.42 18,8.73M3.04,10.32C3.11,10.92 3.25,11.5 3.43,12.03L1.06,10.53L3.1,8.3C3,8.95 2.97,9.64 3.04,10.32M8.03,21.45C8.13,21.84 8.53,22.06 8.91,21.96L10.5,21.54L10.06,23.11C9.96,23.5 10.19,23.9 10.57,24C10.95,24.1 11.35,23.87 11.45,23.5L11.87,21.91L13.03,23.07C13.3,23.35 13.77,23.35 14.05,23.07C14.33,22.79 14.33,22.32 14.05,22.05L12.89,20.88L14.47,20.47C14.85,20.37 15.08,19.97 15,19.59C14.88,19.21 14.5,19 14.09,19.08L12.5,19.5L12.94,17.93C13.04,17.54 12.82,17.15 12.43,17.05C12.05,16.95 11.66,17.17 11.55,17.56L11.14,19.14L10,17.97C9.7,17.69 9.23,17.69 8.95,17.97C8.68,18.27 8.68,18.72 8.95,19L10.11,20.16L8.54,20.57C8.15,20.68 7.93,21.07 8.03,21.45Z" />

        </Icon>
      );
    };
    WeatherPartlySnowyIcon.displayName = 'WeatherPartlySnowyIcon';
      