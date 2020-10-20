import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BagPersonalIcon: FC<IconInterface> = function BagPersonalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BagPersonalIcon ${className}`;
      return (
        <Icon alt="BagPersonal" className={classNames} {...propsRest}>
          <path d="M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,16H9V18H8V16H6V15H18V16Z" />

        </Icon>
      );
    };
    BagPersonalIcon.displayName = 'BagPersonalIcon';
      