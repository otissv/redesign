import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HospitalBoxOutlineIcon: FC<IconInterface> = function HospitalBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HospitalBoxOutlineIcon ${className}`;
      return (
        <Icon alt="HospitalBoxOutline" className={classNames} {...propsRest}>
          <path d="M18 14H14V18H10V14H6V10H10V6H14V10H18M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M20 20H4V4H20V20Z" />

        </Icon>
      );
    };
    HospitalBoxOutlineIcon.displayName = 'HospitalBoxOutlineIcon';
      