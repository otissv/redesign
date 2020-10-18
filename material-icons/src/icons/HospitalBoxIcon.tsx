import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HospitalBoxIcon: FC<IconInterface> = function HospitalBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HospitalBoxIcon ${className}`;
      return (
        <Icon alt="HospitalBox" className={classNames} {...propsRest}>
          <path d="M18,14H14V18H10V14H6V10H10V6H14V10H18M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />

        </Icon>
      );
    };
    HospitalBoxIcon.displayName = 'HospitalBoxIcon';
      