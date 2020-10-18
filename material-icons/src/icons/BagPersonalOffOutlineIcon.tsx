import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BagPersonalOffOutlineIcon: FC<IconInterface> = function BagPersonalOffOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BagPersonalOffOutlineIcon ${className}`;
      return (
        <Icon alt="BagPersonalOffOutline" className={classNames} {...propsRest}>
          <path d="M20,19.35L2.38,1.73L1.11,3L4.77,6.66C4.27,7.34 4,8.16 4,9V20A2,2 0 0,0 6,22H18C18.56,22 19.08,21.76 19.46,21.35L20.84,22.73L22.11,21.46L20,19.35M6,9C6,8.69 6.08,8.38 6.22,8.11L13.11,15H6V9M18,20H6V16H8V18H9V16H14.11L18,19.89V20M16,7A2,2 0 0,1 18,9V14.8L20,16.8V9A4,4 0 0,0 16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V4.8L10.2,7H16M10,4H14V5H10V4Z" />

        </Icon>
      );
    };
    BagPersonalOffOutlineIcon.displayName = 'BagPersonalOffOutlineIcon';
      