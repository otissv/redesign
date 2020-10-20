import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BellOutlineIcon: FC<IconInterface> = function BellOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BellOutlineIcon ${className}`;
      return (
        <Icon alt="BellOutline" className={classNames} {...propsRest}>
          <path d="M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z" />

        </Icon>
      );
    };
    BellOutlineIcon.displayName = 'BellOutlineIcon';
      