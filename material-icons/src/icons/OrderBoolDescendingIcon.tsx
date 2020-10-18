import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const OrderBoolDescendingIcon: FC<IconInterface> = function OrderBoolDescendingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `OrderBoolDescendingIcon ${className}`;
      return (
        <Icon alt="OrderBoolDescending" className={classNames} {...propsRest}>
          <path d="M6 13C3.79 13 2 14.79 2 17S3.79 21 6 21 10 19.21 10 17 8.21 13 6 13M6 19C4.9 19 4 18.1 4 17S4.9 15 6 15 8 15.9 8 17 7.1 19 6 19M6 3C3.79 3 2 4.79 2 7S3.79 11 6 11 10 9.21 10 7 8.21 3 6 3M12 5H22V7H12V5M12 19V17H22V19H12M12 11H22V13H12V11Z" />

        </Icon>
      );
    };
    OrderBoolDescendingIcon.displayName = 'OrderBoolDescendingIcon';
      