import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PointOfSaleIcon: FC<IconInterface> = function PointOfSaleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PointOfSaleIcon ${className}`;
      return (
        <Icon alt="PointOfSale" className={classNames} {...propsRest}>
          <path d="M20,5C19.4,5 19,5.5 19,6.1V16C19,16.6 19.4,17 20,17.1C20.6,17.1 21,16.6 21,16V6.1C21,5.5 20.6,5 20,5M16.4,2H4.6C3.7,2 3,2.7 3,3.6V17.4C3,18.3 3.7,19 4.6,19H6V21C6,21.6 6.4,22 7,22H13C13.6,22 14,21.6 14,21V19H16.4C17.3,19 18,18.3 18,17.4V3.6C18,2.7 17.3,2 16.4,2M5,8H8V10H5V8M12,11V13H9V11H12M9,10V8H12V10H9M12,14V16H9V14H12M5,11H8V13H5V11M5,16V14H8V16H5M8,21H7V19H8V21M13,21H10V19H13V21M16,16H13V14H16V16M16,13H13V11H16V13M16,10H13V8H16V10M16,6H5V4H16V6Z" />

        </Icon>
      );
    };
    PointOfSaleIcon.displayName = 'PointOfSaleIcon';
      