import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BagPersonalOffIcon: FC<IconInterface> = function BagPersonalOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BagPersonalOffIcon ${className}`;
      return (
        <Icon alt="BagPersonalOff" className={classNames} {...propsRest}>
          <path d="M20,19.35L2.38,1.73L1.11,3L4.77,6.66C4.27,7.34 4,8.16 4,9V20A2,2 0 0,0 6,22H18C18.56,22 19.08,21.76 19.46,21.35L20.84,22.73L22.11,21.46L20,19.35M9,16V18H8V16H6V15H13.11L14.11,16H9M20,9A4,4 0 0,0 16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V4.8L20,16.8V9M14,5H10V4H14V5Z" />

        </Icon>
      );
    };
    BagPersonalOffIcon.displayName = 'BagPersonalOffIcon';
      