import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const GasStationIcon: FC<IconInterface> = function GasStationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GasStationIcon ${className}`;
      return (
        <Icon alt="GasStation" className={classNames} {...propsRest}>
          <path d="M18,10A1,1 0 0,1 17,9A1,1 0 0,1 18,8A1,1 0 0,1 19,9A1,1 0 0,1 18,10M12,10H6V5H12M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7 15.5,7.93 15.5,9A2.5,2.5 0 0,0 18,11.5C18.36,11.5 18.69,11.42 19,11.29V18.5A1,1 0 0,1 18,19.5A1,1 0 0,1 17,18.5V14C17,12.89 16.1,12 15,12H14V5C14,3.89 13.1,3 12,3H6C4.89,3 4,3.89 4,5V21H14V13.5H15.5V18.5A2.5,2.5 0 0,0 18,21A2.5,2.5 0 0,0 20.5,18.5V9C20.5,8.31 20.22,7.68 19.77,7.23Z" />

        </Icon>
      );
    };
    GasStationIcon.displayName = 'GasStationIcon';
      