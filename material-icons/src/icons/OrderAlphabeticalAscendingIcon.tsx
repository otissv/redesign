import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const OrderAlphabeticalAscendingIcon: FC<IconInterface> = function OrderAlphabeticalAscendingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `OrderAlphabeticalAscendingIcon ${className}`;
      return (
        <Icon alt="OrderAlphabeticalAscending" className={classNames} {...propsRest}>
          <path d="M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12M9 13V15L5.67 19H9V21H3V19L6.33 15H3V13M7 3H5C3.9 3 3 3.9 3 5V11H5V9H7V11H9V5C9 3.9 8.11 3 7 3M7 7H5V5H7Z" />

        </Icon>
      );
    };
    OrderAlphabeticalAscendingIcon.displayName = 'OrderAlphabeticalAscendingIcon';
      