import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CellphoneMessageOffIcon: FC<IconInterface> = function CellphoneMessageOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneMessageOffIcon ${className}`;
      return (
        <Icon alt="CellphoneMessageOff" className={classNames} {...propsRest}>
          <path d="M2.39 1.73L1.11 3L2.22 4.11C2.08 4.38 2 4.68 2 5V19C2 20.1 2.89 21 4 21H11C12.1 21 13 20.1 13 19V14.89L20.84 22.73L22.11 21.46L2.39 1.73M11 17H4V7H5.11L11 12.89V17M23 4.5V7.5C23 8.33 22.33 9 21.5 9H18L15.1 11.9L15 11.8V4.5C15 3.67 15.67 3 16.5 3H21.5C22.33 3 23 3.67 23 4.5M10.2 7L6.2 3H11C12.1 3 13 3.9 13 5V9.8L11 7.8V7H10.2" />

        </Icon>
      );
    };
    CellphoneMessageOffIcon.displayName = 'CellphoneMessageOffIcon';
      